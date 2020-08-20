const path = require("path");
const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  entry: slsw.lib.entries,
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
  },
  target: "node",
  externals: [nodeExternals()], // this tells webpack not to bundle anything from node_modules folder
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
};
