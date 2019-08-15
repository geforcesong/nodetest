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
    }
};