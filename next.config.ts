import withLess from 'next-with-less';
import type { Configuration } from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {
    modifyVars: {}, 
    javascriptEnabled: true,
  },
  webpack: (config: Configuration) => { // Cung cấp kiểu dữ liệu cho config
    config.cache = false; // Tắt cache Webpack
    return config;
  },
});

export default nextConfig;
