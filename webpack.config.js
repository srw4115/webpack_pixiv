var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: ["./index"]
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/build"
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
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
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!less?sourceMap')
        }]
    }
};
