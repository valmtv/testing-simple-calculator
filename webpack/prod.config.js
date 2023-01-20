const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const baseConfig = require('./base.config.js');

module.exports = {
  ...baseConfig,
  mode: 'production',
};