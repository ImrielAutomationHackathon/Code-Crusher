// const { defineConfig } = require('cypress')
// const eyesPlugin = require('@applitools/eyes-cypress')
// module.exports = eyesPlugin(defineConfig({
//   // the e2e or component configuration
//   e2e: {
//     setupNodeEvents(on, config) {
//     }
//   }
// }))

const { defineConfig } = require("cypress");
const eyesPlugin = require('@applitools/eyes-cypress')
module.exports = defineConfig({
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});