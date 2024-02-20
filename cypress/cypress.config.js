const { defineConfig } = require("cypress");
const eyesPlugin = require("@applitools/eyes-cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
