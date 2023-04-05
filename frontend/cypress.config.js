const { defineConfig } = require("cypress");
const mongo = require("cypress-mongodb");

module.exports = defineConfig({
  env: {
    mongodb: {
      uri: "mongodb://0.0.0.0/",
      database: "rpg",
    },
  },

  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      mongo.configurePlugin(on);
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
