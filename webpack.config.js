const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // Change to 'production' for production builds
  entry: './src/index.js', // Path to your entry file
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel loader to process JS files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Transpile modern JS and JSX
          },
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Extract CSS into separate file
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/, // Handle image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/', // Output directory for images
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve JS and JSX extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your template file
      filename: 'index.html', // Output HTML file name
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css', // Output CSS filename
    }),
  ],
  devtool: 'source-map', // Enable source maps for debugging
 
};
