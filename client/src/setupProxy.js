const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
<<<<<<< HEAD
    createProxyMiddleware('/help', {
      target: 'https://hairgan-tensor.fly.dev/predict',
=======
    createProxyMiddleware(' https://hairgan-tensor.fly.dev/predict', {
      target: 'https://hairgan-tensor.fly.dev',
>>>>>>> 4f28d1f84ddab5ba13087d39b6ab5bdd8ae43373
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/api', {
<<<<<<< HEAD
      target: 'http://localhost:5000/',
=======
      target: 'http://localhost:5000',
>>>>>>> 4f28d1f84ddab5ba13087d39b6ab5bdd8ae43373
      changeOrigin: true,
    }),
  );
};