const path = require("path");

const SRC_DIR = path.join(__dirname, "/client/src");
const DIST_DIR = path.join(__dirname, "/client/public");

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            ["@babel/preset-env"],
            [
              "@babel/preset-react",
              {
                runtime: "automatic",
                importSource: "react",
              },
            ],
          ],
        },
      },
      {
        test: /\.(png|jpe?g|gig)$/i,
        loader: "file-loader",
      },
    ],
  },
};
