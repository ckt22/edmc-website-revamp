/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    ...process.env,
  },
  images: {
    unoptimized: true // disable image optimization for static html files.
  }
}

module.exports = nextConfig
