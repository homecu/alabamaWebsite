import "./src/styles/app.css";
import "@hellobuild/blossom-websites-core-package/dist/styles.min.css";

const React = require("react");
const { Root } = require("@hellobuild/blossom-websites-core-package");

export const wrapRootElement = ({ element }) => {
  return <Root>{element}</Root>;
};
