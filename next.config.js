/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      // Ignora .next y node_modules por completo
      ignored: ['**/.next/**', '**/node_modules/**'],
      // Opcional: fuerza polling cada segundo en tu código fuente
      poll: 1000,
    };
    return config;
  },
};
