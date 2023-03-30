const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // require("@cypress/code-coverage/task")(on, config);
      //
      // // on("file:preprocessor", require("@cypress/code-coverage/use-babelrc"));
      // return config;
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
