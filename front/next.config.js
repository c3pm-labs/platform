/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL || 'http://localhost:4000/graphql',
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  },
  i18n,
};

module.exports = nextConfig;
