const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'o9689h',
  viewportWidth: 1440,
  viewportHeight: 900,
  env: {
    grepFilterSpecs: true
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('cypress-grep/src/plugin')(config);
      return config;
    },
    baseUrl: 'https://buger-eats.vercel.app',
  },
});
