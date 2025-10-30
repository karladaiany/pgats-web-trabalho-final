const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://automationexercise.com',
    defaultCommandTimeout: 10000,
    retries: 1,
  },
});
