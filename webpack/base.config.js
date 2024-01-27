const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      src: path.resolve(__dirname, '../src/'),
      testdata: path.resolve(__dirname, '../testdata/'),
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
        // accept files ending with .ts or .tsx but not .test.ts or .test.tsx
        //
        // WHY DO WE NEED IT:
        // to ensure that test files newer appear in bundle even if
        // somebody imports something from such file by mistakej
        //
        // HOW TO TEST THIS SOLUTION:
        // this solution tested using webpack-bundle-analyzer by creating
        // file wich ends with .test.ts and importing from it something
        // for example a constant, then running npm run analyze-build
        // and as the result number of concatenated files does include
        // that file ending .test.ts but its content is not included
        // this can be visible by comparing src folder size in bundle before
        // and after importing a constant from mentioned *.test.ts file
        // Why number of concatenated files is still affected - because
        // webpackConfig.resolve does allow all *.ts or *.tsx files
        // so this includes *.test.ts or *.test.tsx
        // regexes are not supported in webpackConfig.resolve and I think
        // its not needed because otherwise imports in test files themselves
        // might stop working
        test: /^.*(?!\.test).{5,5}\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: 'defaults' }],
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
          {
            loader: 'restrict-imports-loader',
            options: {
              severity: 'warning',
              rules: [
                {
                  restricted: /^[\.\/]*testdata.*$/,
                  info: 'do not import from testdata in non-test files',
                },
                {
                  restricted: /^.*\.test(\.(tsx?|jsx?))?$/,
                  info: 'do not import from test files',
                },
              ],
            },
          },
        ],
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
