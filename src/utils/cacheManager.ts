
/**
 * Sistema de cache inteligente com TTL e invalidação automática
 */

export interface CacheItem<T = any> {
  data: T;
  timestamp: number;
  ttl: number;
  hits: number;
  lastAccessed: number;
  tags?: string[];
}

export interface CacheStats {
  hits: number;
  misses: number;
  size: number;
  memoryUsage: number;
  hitRate: number;
}

class CacheManager {
  private cache = new Map<string, CacheItem>();
  private stats: CacheStats = {
    hits: 0,
    misses: 0,
    size: 0,
    memoryUsage: 0,
    hitRate: 0
  };
  private maxSize: number;
  private defaultTTL: number;

  constructor(maxSize: number = 100, defaultTTL: number = 5 * 60 * 1000) {
    this.maxSize = maxSize;
    this.defaultTTL = defaultTTL;
    
    // Cleanup expired items every minute
    setInterval(() => this.cleanup(), 60000);
  }

  set<T>(key: string, data: T, ttl?: number, tags?: string[]): void {
    // Remove oldest items if cache is full
    if (this.cache.size >= this.maxSize) {
      this.evictLRU();
    }

    const item: CacheItem<T> = {
      data,
      timestamp: Date.now(),
      ttl: ttl || this.defaultTTL,
      hits: 0,
      lastAccessed: Date.now(),
      tags
    };

    this.cache.set(key, item);
    this.updateStats();
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      this.stats.misses++;
      this.updateStats();
      return null;
    }

    // Check if expired
    if (this.isExpired(item)) {
      this.cache.delete(key);
      this.stats.misses++;
      this.updateStats();
      return null;
    }

    // Update access stats
    item.hits++;
    item.lastAccessed = Date.now();
    this.stats.hits++;
    this.updateStats();

    return item.data;
  }

  has(key: string): boolean {
    const item = this.cache.get(key);
    return item !== undefined && !this.isExpired(item);
  }

  delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    if (deleted) {
      this.updateStats();
    }
    return deleted;
  }

  invalidateByTag(tag: string): number {
    let invalidated = 0;
    
    for (const [key, item] of this.cache.entries()) {
      if (item.tags?.includes(tag)) {
        this.cache.delete(key);
        invalidated++;
      }
    }
    
    if (invalidated > 0) {
      this.updateStats();
    }
    
    return invalidated;
  }

  clear(): void {
    this.cache.clear();
    this.stats = {
      hits: 0,
      misses: 0,
      size: 0,
      memoryUsage: 0,
      hitRate: 0
    };
  }

  getStats(): CacheStats {
    return { ...this.stats };
  }

  getItem(key: string): CacheItem | undefined {
    return this.cache.get(key);
  }

  getAllKeys(): string[] {
    return Array.from(this.cache.keys());
  }

  getKeysByTag(tag: string): string[] {
    const keys: string[] = [];
    
    for (const [key, item] of this.cache.entries()) {
      if (item.tags?.includes(tag)) {
        keys.push(key);
      }
    }
    
    return keys;
  }

  // Cached function wrapper
  cached<T extends (...args: any[]) => any>(
    fn: T,
    keyGenerator?: (...args: Parameters<T>) => string,
    ttl?: number,
    tags?: string[]
  ): T {
    return ((...args: Parameters<T>) => {
      const key = keyGenerator ? keyGenerator(...args) : `${fn.name}_${JSON.stringify(args)}`;
      
      // Try to get from cache
      const cachedResult = this.get(key);
      if (cachedResult !== null) {
        return cachedResult;
      }
      
      // Execute function and cache result
      const result = fn(...args);
      
      // Handle async functions
      if (result instanceof Promise) {
        return result.then((resolvedResult) => {
          this.set(key, resolvedResult, ttl, tags);
          return resolvedResult;
        });
      }
      
      // Cache sync result
      this.set(key, result, ttl, tags);
      return result;
    }) as T;
  }

  private isExpired(item: CacheItem): boolean {
    return Date.now() - item.timestamp > item.ttl;
  }

  private evictLRU(): void {
    let oldestKey: string | null = null;
    let oldestTime = Date.now();
    
    for (const [key, item] of this.cache.entries()) {
      if (item.lastAccessed < oldestTime) {
        oldestTime = item.lastAccessed;
        oldestKey = key;
      }
    }
    
    if (oldestKey) {
      this.cache.delete(oldestKey);
    }
  }

  private cleanup(): void {
    const now = Date.now();
    const keysToDelete: string[] = [];
    
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > item.ttl) {
        keysToDelete.push(key);
      }
    }
    
    keysToDelete.forEach(key => this.cache.delete(key));
    
    if (keysToDelete.length > 0) {
      this.updateStats();
      console.log(`🧹 Cache cleanup: removed ${keysToDelete.length} expired items`);
    }
  }

  private updateStats(): void {
    this.stats.size = this.cache.size;
    this.stats.memoryUsage = this.estimateMemoryUsage();
    this.stats.hitRate = this.stats.hits / (this.stats.hits + this.stats.misses) * 100 || 0;
  }

  private estimateMemoryUsage(): number {
    let size = 0;
    for (const [key, item] of this.cache.entries()) {
      size += key.length * 2; // UTF-16 encoding
      size += JSON.stringify(item).length * 2;
    }
    return size;
  }
}

// Global cache instance
export const cacheManager = new CacheManager();

// Convenience functions
export const setCache = <T>(key: string, data: T, ttl?: number, tags?: string[]) => 
  cacheManager.set(key, data, ttl, tags);

export const getCache = <T>(key: string): T | null => 
  cacheManager.get<T>(key);

export const invalidateCache = (key: string) => 
  cacheManager.delete(key);

export const invalidateCacheByTag = (tag: string) => 
  cacheManager.invalidateByTag(tag);
