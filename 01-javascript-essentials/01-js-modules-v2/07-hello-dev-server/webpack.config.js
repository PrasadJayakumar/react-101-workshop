const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'hello-bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: []
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            TimeUtils: path.resolve(__dirname, 'lib/timeUtils.js')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    mode: 'development'
};