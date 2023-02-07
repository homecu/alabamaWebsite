const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        // Needed when library is linked via `npm link` to app
        gatsby: path.resolve("./node_modules/gatsby"),
        lodash: path.resolve("./node_modules/lodash"),
        react: path.resolve("./node_modules/react"),
        "react-dom": path.resolve("./node_modules/react-dom"),
        "styled-components": path.resolve("./node_modules/styled-components"),
      },
    },
    node: {
      fs: "empty",
      net: "empty",
    },
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path === "/") {
    page.matchPath = "/*";
    createPage(page);
  }
};
