const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  watch: true,

  mode: "production",

  entry: {
    main: "./source/main.js",
  },
  output: {
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};
