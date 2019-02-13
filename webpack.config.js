const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './javascripts/plugins/plugin_man.js',
        esmain: './javascripts/esplugins/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery"
        }),
    ]
};