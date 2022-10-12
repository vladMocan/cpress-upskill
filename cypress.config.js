const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
  },
  screenshotOnFailure: true,
  screenshotsFolder: 'mochawesome-report/assets',
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://be-the-qa-fe.herokuapp.com',
    baseApiUrl: 'https://be-the-qa-api.herokuapp.com/',
    experimentalWebKitSupport: true
  },
})
