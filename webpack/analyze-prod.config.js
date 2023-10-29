const prodConfig = require('./prod.config.js');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  ...prodConfig,
  plugins: [
    ...prodConfig.plugins,
    new BundleAnalyzerPlugin(),
  ],
};
