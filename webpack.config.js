const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
      index:"./src/index.js",
      about:"./src/about.js"
  },
  output: {
      path: __dirname + '/dist',
      filename: "js/[name].js"
  },
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
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000
            }
          }
        ]
      }
    ]
  },
  // plugins: [
  //   new HtmlWebPackPlugin({
  //     template: "./src/index.html",
  //     filename: "./index.html"
  //   })
  // ]
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      filename: 'home.html',
      chunks: ['home'] // 預設會將打包出的所有 js 插入 html。故需指明頁面需要的模組
    }),
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      filename: 'about.html',
      chunks: ['about']
    })
  ]
};