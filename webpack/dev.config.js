const baseConfig = require('./base.config.js');

module.exports = {
  ...baseConfig,
  mode: 'development',
  stats: 'minimal',
  devServer: {
    static: './dist',
    port: 8000,
  },
};
