const path = require('path');

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
    mode: 'development'
};