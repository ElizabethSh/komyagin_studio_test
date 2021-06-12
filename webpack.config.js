const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require(`webpack`);

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        scripts: './js/index.js',
        vendor: './js/tabs.js',
    },
    output: {
        filename: './js/[name].min.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: false,
    devServer: {
        open: true,
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.min.css'
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            exclude: /vendor.*.*/
        })
    ],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env'],
              }
            }
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]',
                    esModule: false
                }
              },
            ],
          },
        ],
    },
}
