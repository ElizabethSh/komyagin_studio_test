const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    target: ['web', 'es5'],
    context: path.resolve(__dirname, 'src'),
    mode: 'production',
    entry: {
        scripts: './js/index.js',
        vendor: './js/tabs.js',
    },
    output: {
        filename: 'js/[name].min.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'source-map',
    devServer: {
        // port: 3000,
        open: true,
        hot: true,
        watchContentBase: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.min.css'
        }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                    [
                      '@babel/preset-env',
                      {
                        targets: {
                          ie: 11,
                        },
                      }
                    ]
                  ],
              }
            }
          }
        ],
      },
}
