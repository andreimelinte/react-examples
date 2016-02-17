var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: __dirname + "/src/index.jsx",
    output: {
        path: __dirname + "/application/www",
        filename: "bundle.js",
        devtoolLineToLine: true,
        pathinfo: true
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "jsx?harmony!babel!eslint", exclude: /(node_modules|bower_components)/, },
            { test: /\.scss$/,  loader: ExtractTextPlugin.extract('css!sass') },
            { test: /\.ttf$/,  loader: ('file-loader') },
            { test: /\.png$/,  loader: ('file-loader') }
        ]
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.OldWatchingPlugin()
    ],

    resolve: {
        modulesDirectories: [
            __dirname + './../node_modules',
        ],
    },

    resolveLoader: {
        modulesDirectories: [
            __dirname + './../node_modules'
        ]
    },

    devServer: {
        contentBase: "./build",
        noInfo: false, //  --no-info option
        hot: true,
        inline: true
    },

    devtool: '#eval'
}
