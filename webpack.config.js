var path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/main.js')
  },
  output: {
    filename: './index.js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
