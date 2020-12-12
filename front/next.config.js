const nextConfig = {
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL || 'http://localhost:4000/graphql',
  },
};

module.exports = nextConfig;
