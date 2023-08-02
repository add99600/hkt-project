const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/help', {
      target: 'https://hairgan-tensor.fly.dev/predict',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:5000/',
      changeOrigin: true,
    }),
  );
};