const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: "./js/main.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist'
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // {
            //     test: /\.html$/i,
            //     loader: 'html-loader'
            // },
            {
                test: /\.(jpe?g|gif|mp4)$/i,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    name: './fonts/[name].ext?[hash]'
                }
            }
        ]
    }
}