/** @type {import('next').NextConfig} */
const nextConfig = {
  // 使用 Webpack（Next.js 16 默认启用 Turbopack，我们显式选择 Webpack）
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
