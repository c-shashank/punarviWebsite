// Minimal worker to serve static site
// This is required when using 'wrangler deploy' instead of 'wrangler pages deploy'

export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};

