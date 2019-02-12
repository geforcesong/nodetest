const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './javascripts/plugin_man.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery"
        }),
    ]
};