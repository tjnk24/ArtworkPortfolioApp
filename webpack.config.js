const path = require('path');
const dotenv = require('dotenv');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const development = process.env.NODE_ENV !== 'production';

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  const previous = prev;
  previous[`process.env.${next}`] = JSON.stringify(env[next]);
  return previous;
}, {});

const cssLoaders = [
  {
    loader: development ? 'style-loader' : MiniCssExtractPlugin.loader,
  },
  {
    loader: 'css-loader',
    options: {
      sourceMap: development,
    },
  },
];

module.exports = {
  entry: [
    './src/index.tsx',
  ],
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: development ? '' : 'build/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  watch: true,
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'src'),
    historyApiFallback: true,
  },
  mode: development ? 'development' : 'production',
  devtool: development ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: cssLoaders,
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff|woff2|mp4|ico)$/,
        loader: 'file-loader',
        options: {
          context: path.resolve(__dirname, 'src'),
          publicPath: '',
          name: '[name].[ext]',
          limit: 1000,
          esModule: false,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@helpers': path.resolve(__dirname, 'src', 'helpers'),
    },
  },
  plugins: [
    // new BundleAnalyzerPlugin(), // uncomment to analyze the bundle
    new CleanWebpackPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      ...envKeys,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: development ? '[name].css' : '[name].[hash].css',
      chunkFilename: '[id].css',
    }),
  ],
};
