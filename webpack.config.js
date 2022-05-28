const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ],
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    watchFiles: ['src/**/*', 'public/**/*'],
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    compress: true,
    port: 9000,
  }
};