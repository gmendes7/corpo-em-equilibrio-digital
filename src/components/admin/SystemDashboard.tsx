
import { useState, useEffect } from 'react';
import { Activity, AlertTriangle, CheckCircle, Clock, TrendingUp, Users } from 'lucide-react';
import { performanceMonitor } from '../../utils/performanceMonitor';
import { automatedTester } from '../../utils/testUtils';
import { cacheManager } from '../../utils/cacheManager';

const SystemDashboard = () => {
  const [metrics, setMetrics] = useState<any>(null);
  const [testResults, setTestResults] = useState<any>(null);
  const [cacheStats, setCacheStats] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMetrics = () => {
      setMetrics({
        session: performanceMonitor.getSessionSummary(),
        report: JSON.parse(performanceMonitor.generateReport())
      });
      setCacheStats(cacheManager.getStats());
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
  }, []);

  const runQuickTests = async () => {
    const suite = await automatedTester.runTestSuite('Quick Health Check', [
      () => automatedTester.testPagePerformance(window.location.href, 3000),
      () => automatedTester.testAccessibility(document.body),
      () => automatedTester.testComponentRendering('App', async () => {
        return document.querySelector('#root') !== null;
      })
    ]);
    
    setTestResults(suite);
  };

  // Tecla de atalho para mostrar/esconder o dashboard (Ctrl + Shift + D)
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [isVisible]);

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-stone-800 text-white p-2 rounded-full shadow-lg hover:bg-stone-700 transition-colors"
          title="Mostrar Dashboard (Ctrl+Shift+D)"
        >
          <Activity size={20} />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 p-4">
      <div className="bg-white rounded-xl max-w-6xl mx-auto max-h-full overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-stone-800 flex items-center gap-2">
            <Activity className="text-verde-musgo" />
            Sistema Dashboard
          </h2>
          <button
            onClick={() => setIsVisible(false)}
            className="text-stone-500 hover:text-stone-700 text-xl"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Metrics Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-green-600" size={20} />
                <h3 className="font-semibold text-green-800">Status</h3>
              </div>
              <p className="text-2xl font-bold text-green-600">Online</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Users className="text-blue-600" size={20} />
                <h3 className="font-semibold text-blue-800">Sessão</h3>
              </div>
              <p className="text-2xl font-bold text-blue-600">
                {metrics?.session.pageViews?.length || 0}
              </p>
              <p className="text-sm text-blue-600">páginas vistas</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="text-purple-600" size={20} />
                <h3 className="font-semibold text-purple-800">Performance</h3>
              </div>
              <p className="text-2xl font-bold text-purple-600">
                {metrics?.report.coreWebVitals?.LCP?.toFixed(0) || 'N/A'}ms
              </p>
              <p className="text-sm text-purple-600">LCP</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="text-orange-600" size={20} />
                <h3 className="font-semibold text-orange-800">Cache</h3>
              </div>
              <p className="text-2xl font-bold text-orange-600">
                {cacheStats?.hitRate?.toFixed(1) || 0}%
              </p>
              <p className="text-sm text-orange-600">hit rate</p>
            </div>
          </div>

          {/* Performance Details */}
          {metrics && (
            <div className="bg-stone-50 p-4 rounded-lg">
              <h3 className="font-semibold text-stone-800 mb-3">Core Web Vitals</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-sm text-stone-600">LCP</p>
                  <p className={`text-xl font-bold ${metrics.report.coreWebVitals.LCP > 2500 ? 'text-red-600' : 'text-green-600'}`}>
                    {metrics.report.coreWebVitals.LCP?.toFixed(0) || 'N/A'}ms
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-stone-600">FID</p>
                  <p className={`text-xl font-bold ${metrics.report.coreWebVitals.FID > 100 ? 'text-red-600' : 'text-green-600'}`}>
                    {metrics.report.coreWebVitals.FID?.toFixed(0) || 'N/A'}ms
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-stone-600">CLS</p>
                  <p className={`text-xl font-bold ${metrics.report.coreWebVitals.CLS > 0.1 ? 'text-red-600' : 'text-green-600'}`}>
                    {metrics.report.coreWebVitals.CLS?.toFixed(3) || 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Quick Tests */}
          <div className="bg-stone-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-stone-800">Testes Automatizados</h3>
              <button
                onClick={runQuickTests}
                className="bg-verde-musgo text-white px-4 py-2 rounded-lg hover:bg-verde-musgo/90 transition-colors"
              >
                Executar Testes
              </button>
            </div>
            
            {testResults && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Passou: {testResults.passed}</span>
                  <span>Falhou: {testResults.failed}</span>
                  <span>Total: {testResults.tests.length}</span>
                </div>
                <div className="space-y-1">
                  {testResults.tests.map((test: any, index: number) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      {test.passed ? (
                        <CheckCircle className="text-green-600" size={16} />
                      ) : (
                        <AlertTriangle className="text-red-600" size={16} />
                      )}
                      <span className={test.passed ? 'text-green-800' : 'text-red-800'}>
                        {test.testName}
                      </span>
                      <span className="text-stone-500 ml-auto">
                        {test.duration.toFixed(0)}ms
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Cache Statistics */}
          {cacheStats && (
            <div className="bg-stone-50 p-4 rounded-lg">
              <h3 className="font-semibold text-stone-800 mb-3">Estatísticas do Cache</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-stone-600">Hits</p>
                  <p className="font-bold text-green-600">{cacheStats.hits}</p>
                </div>
                <div>
                  <p className="text-stone-600">Misses</p>
                  <p className="font-bold text-red-600">{cacheStats.misses}</p>
                </div>
                <div>
                  <p className="text-stone-600">Itens</p>
                  <p className="font-bold text-blue-600">{cacheStats.size}</p>
                </div>
                <div>
                  <p className="text-stone-600">Memória</p>
                  <p className="font-bold text-purple-600">
                    {(cacheStats.memoryUsage / 1024).toFixed(1)}KB
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SystemDashboard;
