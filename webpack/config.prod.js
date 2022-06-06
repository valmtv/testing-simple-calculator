const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const baseConfig = require('./config.base.js');

module.exports = {
  ...baseConfig,
  mode: 'production',
};
