const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: [
          {
            loader: "raw-loader",
            options: {
              minimize: true,
            },
          },
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml|wav|mp3)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              minimize: true,
            },
          },
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, "../")
    }),
    new webpack.DefinePlugin({
      PROD: JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets/images--landing/*"
        },
        {
          from: "src/assets/images--landing/levelPopUp/*"
        },
        {
          from: "manifest.json"
        },
      ],
    }),
  ]
};
