const path = require("path");

module.exports = {
    entry: {
        main: "./src/main.js"
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: '/'
    },
    devServer: {
        contentBase: 'dist', // !!! папка со статическими файлами !!!
        overlay: true // показать фон с ошибкой
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader' // внедряет стили в html
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    }
}