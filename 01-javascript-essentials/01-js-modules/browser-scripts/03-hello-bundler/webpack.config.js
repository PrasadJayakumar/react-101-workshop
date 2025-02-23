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
        extensions: ['.js']
    },
    mode: 'development'
};