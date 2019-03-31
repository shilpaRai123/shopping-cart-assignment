



  var HtmlWebpackPlugin = require('html-webpack-plugin');
  var path = require('path');
  
  module.exports = {
    entry: ['@babel/polyfill', './src/js/app.js'],
    output: {
      path: __dirname + '/dist',
      filename: 'index_bundle.js'
    },
    devServer:{
    contentBase:'./dist',
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude:/node_modules/,
              use: {
                loader: "babel-loader",
               
              }
            },
            {
                        test: /\.(png|svg|jpg|gif)$/,
                        use: [
                           {
                            loader: 'file-loader'
                           }
                         ]
                       },
            {
              test: /\.scss$/,
              use: [
                {
                  loader: "style-loader" // creates style nodes from JS strings
                },
                {
                  loader: "css-loader" // translates CSS into CommonJS
                },
                {
                  loader: "sass-loader" // compiles Sass to CSS
                }
              ]
            }
          ]
        }, 
    plugins: [
      new HtmlWebpackPlugin(), // Generates default index.html
      new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'index.html',
        template: 'index.html'
      })
    ]
  }

 
   