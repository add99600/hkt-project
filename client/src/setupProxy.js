const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware(' https://hairgan-tensor.fly.dev/predict', {
      target: 'https://hairgan-tensor.fly.dev',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:5000',
      changeOrigin: true,
    }),
  );
};