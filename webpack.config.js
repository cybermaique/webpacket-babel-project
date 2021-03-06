const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/, //expressão regular para ler todos css, scss, sas.
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]  
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] //vai setar a versão antiga js
                    }
                
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, //imagens
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]' //nome.extensão
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),

        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: './src/login.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
}