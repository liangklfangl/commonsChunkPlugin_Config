
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const path = require('path');

const env = { dev: process.env.NODE_ENV };

const devServerConfig = {
   hot:true,
  historyApiFallback: { disableDotRule: true }, 
  stats: { colors: true } 
};

const server = new WebpackDevServer(webpack(webpackConfig(env)), devServerConfig);

server.listen(3000, 'localhost');
