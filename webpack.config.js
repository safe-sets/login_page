const path = require('path');

const SRC_DIR = path.join(__dirname, 'client');
const OUT_DIR = path.join(__dirname, 'public');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: OUT_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
