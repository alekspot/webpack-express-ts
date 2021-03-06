const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SvgStorePlugin = require('external-svg-sprite-loader');

module.exports = {
    mode: 'development',
    entry: ['webpack-hot-middleware/client?reload=true','./src/main.ts'],
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: 'dist', // !!! папка со статическими файлами !!!
        overlay: true, // показать фон с ошибкой
        hot: true 
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss|css$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(jpg|gif|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '/assets/images/[name]-[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: SvgStorePlugin.loader, //извлекает svg в спрайт (даже в css)
                options: {
                    name: 'sprite.svg',
                    iconName: '[name]'
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new SvgStorePlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '../src/assets/images'), to: 'assets/images' }
            ],
        }),
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.[chunkhash].css'
        }),
        
    ]
};