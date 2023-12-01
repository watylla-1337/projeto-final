// reportWebVitals.js

// Esta função é utilizada pelo React para reportar métricas de desempenho.
// Ela será chamada automaticamente pelo React.
export default function reportWebVitals(onPerfEntry) {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      });
    }
  }
  // reportWebVitals.js

  