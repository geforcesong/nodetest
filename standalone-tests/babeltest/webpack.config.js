const webpack = require('webpack');
module.exports = {
    entry: ['babel-polyfill', './script.js'],

    output: {
        filename: './bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'MyData': JSON.stringify('Hello My define1'),
            'MyObject': JSON.stringify({ name:'George', sex: 'M', age: 30})
        })
    ]
};