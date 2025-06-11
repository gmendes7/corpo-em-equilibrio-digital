
/**
 * Utilities para testes automatizados
 */

export interface TestResult {
  testName: string;
  passed: boolean;
  duration: number;
  error?: string;
  metadata?: Record<string, any>;
}

export interface TestSuite {
  name: string;
  tests: TestResult[];
  passed: number;
  failed: number;
  duration: number;
}

class AutomatedTester {
  private suites: TestSuite[] = [];

  // Teste de componentes React
  async testComponentRendering(componentName: string, testFn: () => Promise<boolean>): Promise<TestResult> {
    const startTime = performance.now();
    
    try {
      const passed = await testFn();
      const duration = performance.now() - startTime;
      
      return {
        testName: `${componentName} - Rendering`,
        passed,
        duration,
        metadata: { type: 'component' }
      };
    } catch (error) {
      const duration = performance.now() - startTime;
      return {
        testName: `${componentName} - Rendering`,
        passed: false,
        duration,
        error: error instanceof Error ? error.message : String(error),
        metadata: { type: 'component' }
      };
    }
  }

  // Teste de APIs
  async testApiEndpoint(endpoint: string, expectedStatus: number = 200): Promise<TestResult> {
    const startTime = performance.now();
    
    try {
      const response = await fetch(endpoint);
      const duration = performance.now() - startTime;
      const passed = response.status === expectedStatus;
      
      return {
        testName: `API - ${endpoint}`,
        passed,
        duration,
        metadata: { 
          type: 'api',
          status: response.status,
          expectedStatus 
        }
      };
    } catch (error) {
      const duration = performance.now() - startTime;
      return {
        testName: `API - ${endpoint}`,
        passed: false,
        duration,
        error: error instanceof Error ? error.message : String(error),
        metadata: { type: 'api' }
      };
    }
  }

  // Teste de performance
  async testPagePerformance(url: string, maxLoadTime: number = 3000): Promise<TestResult> {
    const startTime = performance.now();
    
    try {
      // Simulate page load test
      const navigationStart = performance.timing?.navigationStart || Date.now();
      const loadEventEnd = performance.timing?.loadEventEnd || Date.now();
      const loadTime = loadEventEnd - navigationStart;
      
      const duration = performance.now() - startTime;
      const passed = loadTime <= maxLoadTime;
      
      return {
        testName: `Performance - ${url}`,
        passed,
        duration,
        metadata: {
          type: 'performance',
          loadTime,
          maxLoadTime,
          url
        }
      };
    } catch (error) {
      const duration = performance.now() - startTime;
      return {
        testName: `Performance - ${url}`,
        passed: false,
        duration,
        error: error instanceof Error ? error.message : String(error),
        metadata: { type: 'performance' }
      };
    }
  }

  // Teste de acessibilidade
  async testAccessibility(element: Element): Promise<TestResult> {
    const startTime = performance.now();
    
    try {
      const issues: string[] = [];
      
      // Verificar alt text em imagens
      const images = element.querySelectorAll('img');
      images.forEach((img, index) => {
        if (!img.alt && !img.getAttribute('aria-label')) {
          issues.push(`Image ${index + 1} missing alt text`);
        }
      });
      
      // Verificar links sem texto
      const links = element.querySelectorAll('a');
      links.forEach((link, index) => {
        const text = link.textContent?.trim();
        const ariaLabel = link.getAttribute('aria-label');
        if (!text && !ariaLabel) {
          issues.push(`Link ${index + 1} missing accessible text`);
        }
      });
      
      // Verificar headings hierarchy
      const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let lastLevel = 0;
      headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > lastLevel + 1) {
          issues.push(`Heading ${index + 1} skips levels (h${lastLevel} to h${level})`);
        }
        lastLevel = level;
      });
      
      const duration = performance.now() - startTime;
      const passed = issues.length === 0;
      
      return {
        testName: 'Accessibility Check',
        passed,
        duration,
        metadata: {
          type: 'accessibility',
          issues: issues.length > 0 ? issues : undefined
        }
      };
    } catch (error) {
      const duration = performance.now() - startTime;
      return {
        testName: 'Accessibility Check',
        passed: false,
        duration,
        error: error instanceof Error ? error.message : String(error),
        metadata: { type: 'accessibility' }
      };
    }
  }

  async runTestSuite(name: string, tests: (() => Promise<TestResult>)[]): Promise<TestSuite> {
    const startTime = performance.now();
    const results: TestResult[] = [];
    
    for (const test of tests) {
      const result = await test();
      results.push(result);
    }
    
    const duration = performance.now() - startTime;
    const passed = results.filter(r => r.passed).length;
    const failed = results.filter(r => !r.passed).length;
    
    const suite: TestSuite = {
      name,
      tests: results,
      passed,
      failed,
      duration
    };
    
    this.suites.push(suite);
    return suite;
  }

  generateReport(): string {
    const totalTests = this.suites.reduce((acc, suite) => acc + suite.tests.length, 0);
    const totalPassed = this.suites.reduce((acc, suite) => acc + suite.passed, 0);
    const totalFailed = this.suites.reduce((acc, suite) => acc + suite.failed, 0);
    const totalDuration = this.suites.reduce((acc, suite) => acc + suite.duration, 0);
    
    const report = {
      summary: {
        totalTests,
        totalPassed,
        totalFailed,
        passRate: (totalPassed / totalTests * 100).toFixed(2) + '%',
        totalDuration: totalDuration.toFixed(2) + 'ms'
      },
      suites: this.suites
    };
    
    return JSON.stringify(report, null, 2);
  }

  getSuites(): TestSuite[] {
    return this.suites;
  }

  clearResults(): void {
    this.suites = [];
  }
}

export const automatedTester = new AutomatedTester();
