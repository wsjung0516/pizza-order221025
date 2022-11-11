import { defineConfig } from 'cypress'
  const registerCodeCoverageTasks = require("@cypress/code-coverage/task");

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return registerCodeCoverageTasks(on, config);
    },

    'baseUrl': 'http://localhost:4200',
    supportFile: false,
    env: {
      // https://github.com/bahmutov/cypress-slow-down
      commandDelay: 500,
    },
  },


  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }

})
