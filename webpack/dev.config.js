const baseConfig = require('./base.config.js');

module.exports = {
  ...baseConfig,
  mode: 'development',
  plugins: [
    ...baseConfig.plugins,
  ],
  devServer: {
    static: './dist',
    port: 8000,
  },
};
