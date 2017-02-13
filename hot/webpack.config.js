const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// Okay, this may be confusing at first glance but go through it step-by-step
module.exports = env => {

  //  if (!env) {
  //   env = {};
  // }
  
  const ifProd = plugin =>  env.prod ? plugin : undefined;
  const removeEmpty = array => array.filter(p => !!p);

  return {
 
    entry: {
      main: [path.join(__dirname, '../example7/main.js'),'webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:3000'],
    },

    output: {
       filename: '[name].[hash].js',
       path: path.join(__dirname, '../dest/example7'),
       hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js',
       hotUpdateMainFilename: 'hot/[hash].hot-update.json',
       publicPath: 'http://localhost:3000/'
    },

    module: {
      // Loaders allow you to preprocess files!
      loaders: [
        {
          test: /\.(js)$/, // look for .js files
          exclude: /node_modules/, // ingore /node_modules
          loader: 'babel-loader', // preprocess with that babel goodness
          query: {
            cacheDirectory: true,
          },
        },
      ],
    },

    plugins: removeEmpty([
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: 2,
        filename: '[name].[hash].js',
      }),
    ]),
  };
};
