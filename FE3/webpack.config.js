const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.jsx', // Entry point to your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Use presets for both modern JavaScript and React
          },
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'], // Use these loaders for CSS files
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve these extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      publicPath: '/', // Path to your HTML template
    }),
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'public'),
      },
      historyApiFallback: true, // This is useful for single-page applications
      compress: true,
      port: 3000,
  },
  resolve: {
    fallback: {
      "url": require.resolve("url/")
    }
  }

};