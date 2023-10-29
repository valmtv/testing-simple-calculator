const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      src: path.resolve(__dirname, '../src/'),
    },
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        // this only matches filenames that end with .ts or .tsx
        // but not with test.ts or test.tsx
        // WHY DO WE NEED IT: to ensure that test files newer appear in bundle
        // this solution tested using webpack-bundle-analyzer by creating
        // file wich ends with test.ts and importing from it something
        // for example a constant, then running npm run analyze-build
        // and as the result number of concatenated files does include
        // that file ending test.ts but its content is not included
        // this can be visible by src folder size in bundle: it was the same
        // as before modifying regex to skip *.test.tsx? files
        // also tested that with old regex that accepts all *.tsx? files
        // src folder size in bundel does inclrease
        // Why number of concatenated files is still affected - because
        // webpackConfig.resolve does allow all *.ts or *.tsx files and
        // regexes are not supported there plus maybe we even don't need this
        // because without this imports in test files themselves might stop
        // working
        test: /^.*[^t][^e][^s][^t]\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../node_modules/styleagnostic-bare-input'),
        ],
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React 18 Application Template',
      template: 'src/index.html',
      favicon: 'src/assets/ukraine-flag.ico',
    }),
  ],
};
