const ESLintPlugin = require('eslint-webpack-plugin');
const baseConfig = require('./base.config.js');

module.exports = {
  ...baseConfig,
  mode: 'development',
  plugins: [
    ...baseConfig.plugins,
    new ESLintPlugin({
      eslintPath: require.resolve('eslint'),
      extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
    }),
  ],
  stats: 'minimal',
  devServer: {
    static: './dist',
    port: 8000,
  },
};
