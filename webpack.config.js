var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './app/App.js',
  ],

  output: {
    path: __dirname,
    // production usage
    // publicPath: 'http://mycdn.com/',
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test:/\.json$/, loader: "json" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.sass$/, loaders: ["style", "css", "sass"] },
      {
        // Do not transform vendor's CSS with CSS-modules
        // The point is that they remain in global scope.
        // Since we require these CSS files in our JS or CSS files,
        // they will be a part of our compilation either way.
        // So, no need for ExtractTextPlugin here.
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.js$/,
      //   loaders: ['react-hot', 'jsx'], // <-- changed line
      //   exclude: /node_modules/
      // },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      },
      { test:/\.html$/, loader: 'html-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  // postcss:[
  //   require('autoprefixer');
  // ],

  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'yoyo',
    //   filename: 'index.html',
    //   inject: true
    // }),
    // new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devtool: 'source-map',
  devServer: {
    color: true,
    historyApiFallback: true,
    // inline: true,
    // hot: true,
    progress: true,
    contentBase: './'
  }
}
