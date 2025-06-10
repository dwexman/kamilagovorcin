// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,  // o lo quitas si ya no lo necesitas
  },
  // …otras opciones que tuvieras…
};

export default nextConfig;
