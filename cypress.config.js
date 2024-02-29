const { defineConfig } = require("cypress");
const eyesPlugin = require("@applitools/eyes-cypress");
module.exports = eyesPlugin(
  defineConfig({
    // the e2e or component configuration
    e2e: {
      projectId: "bb5cbi",
      setupNodeEvents(on, config) {},
      testIsolation: false,
      experimentalSessionAndOrigin: true
    },
    component: {
      setupNodeEvents(on, config) {
        const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin");

        getCompareSnapshotsPlugin(on, config);
      },
    },
  })
);