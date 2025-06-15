/**
 * Sistema de monitoramento de performance e métricas
 */

export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  metadata?: Record<string, any>;
}

export interface UserSession {
  sessionId: string;
  startTime: number;
  pageViews: string[];
  interactions: number;
  errors: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private session: UserSession;
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.session = {
      sessionId: this.generateSessionId(),
      startTime: Date.now(),
      pageViews: [],
      interactions: 0,
      errors: 0
    };

    this.initializeObservers();
    this.trackPageView(window.location.pathname);
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeObservers(): void {
    // Core Web Vitals monitoring
    if ('PerformanceObserver' in window) {
      // LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        // Corrigido: lastEntry pode ser do tipo PerformanceEntry, mas element só existe em LargestContentfulPaint API
        if ((lastEntry as any).element) {
          this.recordMetric('LCP', lastEntry.startTime, {
            element: (lastEntry as any).element?.tagName || 'unknown'
          });
        } else {
          this.recordMetric('LCP', lastEntry.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          this.recordMetric('FID', entry.processingStart - entry.startTime, {
            eventType: entry.name
          });
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);

      // CLS (Cumulative Layout Shift)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.recordMetric('CLS', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    }
  }

  recordMetric(name: string, value: number, metadata?: Record<string, any>): void {
    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: Date.now(),
      metadata
    };

    this.metrics.push(metric);
    
    // Log critical metrics
    if (name === 'LCP' && value > 2500) {
      console.warn(`🐌 Poor LCP detected: ${value}ms`);
    }
    if (name === 'FID' && value > 100) {
      console.warn(`🐌 Poor FID detected: ${value}ms`);
    }
    if (name === 'CLS' && value > 0.1) {
      console.warn(`🐌 Poor CLS detected: ${value}`);
    }

    // Store in localStorage for analysis
    this.persistMetrics();
  }

  trackPageView(path: string): void {
    this.session.pageViews.push(path);
    this.recordMetric('page_view', 1, { path });
    
    // Track page load time
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      this.recordMetric('page_load_time', loadTime, { path });
    }
  }

  trackUserInteraction(action: string, element?: string): void {
    this.session.interactions++;
    this.recordMetric('user_interaction', 1, { action, element });
  }

  trackError(error: Error, context?: string): void {
    this.session.errors++;
    this.recordMetric('error', 1, {
      message: error.message,
      stack: error.stack,
      context
    });
  }

  getSessionSummary(): UserSession & { metrics: PerformanceMetric[] } {
    return {
      ...this.session,
      metrics: this.metrics
    };
  }

  getMetricsByName(name: string): PerformanceMetric[] {
    return this.metrics.filter(metric => metric.name === name);
  }

  getAverageMetric(name: string): number {
    const metrics = this.getMetricsByName(name);
    if (metrics.length === 0) return 0;
    
    const sum = metrics.reduce((acc, metric) => acc + metric.value, 0);
    return sum / metrics.length;
  }

  private persistMetrics(): void {
    try {
      const sessionData = this.getSessionSummary();
      localStorage.setItem('performance_session', JSON.stringify(sessionData));
    } catch (error) {
      console.error('Failed to persist performance metrics:', error);
    }
  }

  generateReport(): string {
    const report = {
      sessionId: this.session.sessionId,
      duration: Date.now() - this.session.startTime,
      pageViews: this.session.pageViews.length,
      interactions: this.session.interactions,
      errors: this.session.errors,
      coreWebVitals: {
        LCP: this.getAverageMetric('LCP'),
        FID: this.getAverageMetric('FID'),
        CLS: this.getAverageMetric('CLS')
      },
      performance: {
        avgPageLoadTime: this.getAverageMetric('page_load_time')
      }
    };

    return JSON.stringify(report, null, 2);
  }

  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Global error tracking
window.addEventListener('error', (event) => {
  performanceMonitor.trackError(
    new Error(event.message),
    `Global error at ${event.filename}:${event.lineno}`
  );
});

window.addEventListener('unhandledrejection', (event) => {
  performanceMonitor.trackError(
    new Error(event.reason),
    'Unhandled Promise Rejection'
  );
});

// Track route changes for SPAs
let currentPath = window.location.pathname;
const trackRouteChange = () => {
  const newPath = window.location.pathname;
  if (newPath !== currentPath) {
    currentPath = newPath;
    performanceMonitor.trackPageView(newPath);
  }
};

// Listen for browser navigation
window.addEventListener('popstate', trackRouteChange);

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  performanceMonitor.cleanup();
});
