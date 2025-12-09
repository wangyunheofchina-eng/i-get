/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    return config;
  },
  turbopack: false,
};

module.exports = nextConfig;
