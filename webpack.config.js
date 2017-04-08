var CopyWebpackPlugin = require('copy-webpack-plugin')
var path = require('path')

module.exports = {
    entry: './app/jsx/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './app')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    // plugins: [
    //     new CopyWebpackPlugin([
    //         { from: './src/index.html' }
    //     ])
    // ],
    devServer: {
        inline: true,
        contentBase: './app',
        port: 8000
    }
}