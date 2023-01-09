/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    ...process.env,
  },
}

module.exports = nextConfig
