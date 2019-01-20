var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const PATHS = {
    app: path.resolve(__dirname,'app'),
    build: path.resolve(__dirname,'build')
};
const APP_DIR = PATHS.app + '/index.js';
module.exports = {
    entry: ['@babel/polyfill', APP_DIR],
    // entry: {
    //     app: PATHS.app + '/index.js'
    // },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
     rules: [
      {
          test: /\.css$/,
          use: ['style-loader','css-loader']
      },
      {
         test: /\.js?/,
         exclude: /(node_modules|bower_compontents)/,
         loader: 'babel-loader'
      },
      {
         test: /\.png$/,
        use: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        use: "file-loader"
      },
      {
       test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
       use: 'url-loader? limit=10000&mimetype=application/font-woff'
       },
       {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream'
       },
       {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
        },
        {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml'
       }
     ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
          template: './build/index.html', 
          filename: './index.html' 
        })
      ]
};