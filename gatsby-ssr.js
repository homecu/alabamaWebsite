import "./src/styles/app.css";
import "@homecu/blossom-websites-core-package/dist/styles.min.css";

const React = require("react");
const { Root } = require("@homecu/blossom-websites-core-package");

export const wrapRootElement = ({ element }) => {
  return <Root>{element}</Root>;
};
