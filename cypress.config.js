const cypress = require("cypress");
const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    video: true,  // Ensure this is set to true
    videosFolder: "cypress/videos",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
    },
    reporter: 'mochawesome',
    reporterOptions:{
      charts:true,
      overwrite:false,
      html:false,
      json:true,
      reportDir:'cypress/reports'

    }
  },
});
