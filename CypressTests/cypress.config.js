const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Aire Logic Cookie Clicker Test Report',
    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

    },
    baseUrl: 'https://Dave-Greenwood-2023-09-05.cookieclickertechtest.airelogic.com/',
    chromeWebSecurity: false,
    viewportHeight: 768,
    viewportWidth: 1366,
    video: false,
    screenshotOnRunFailure: true,
    hideXHR: true,
    numTestsKeptInMemory: 1
  },
});
