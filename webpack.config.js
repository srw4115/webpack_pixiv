module.exports = {
  entry: {
    app: ["./index"]
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/build"
  },
  plugins: [
   
  ],
  devtool: "inline-source-map",
  module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        },
      },
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};