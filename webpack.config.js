const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mainProcessConfig = {
  entry: {
    main: './src/main/index.ts',
    preload: './src/main/preload.ts'
  },
  target: 'electron-main',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  node: {
    __dirname: false,
    __filename: false
  },
};

const rendererProcessConfig = {
  entry: {
    renderer: './src/renderer/index.ts'
  },
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/renderer/index.html'),
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};

module.exports = [
  mainProcessConfig,
  rendererProcessConfig
];
