const path = require('path');


const isDev = false;

module.exports = {
    entry: './src/entry.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    mode: 'development'
};