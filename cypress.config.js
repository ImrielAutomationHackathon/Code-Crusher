const { defineConfig } = require("cypress");
const eyesPlugin = require("@applitools/eyes-cypress");
const allureWriter = require()
module.exports = eyesPlugin(
  defineConfig({
    // the e2e or component configuration
    e2e: {
      projectId: "bb5cbi",
      setupNodeEvents(on, config) {},
      testIsolation: false,
      experimentalSessionAndOrigin: true
    },
  })
);