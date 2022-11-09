const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function () {
    return {
        entry: `${__dirname}/src/index.js`,
        mode: 'development',
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        devServer: {
            hot: true,
            open: true,
            port: 8081,
        },
        cache: false,
        plugins: [
            new HtmlWebpackPlugin({
                template: `${__dirname}/public/template.html`
            })
        ]
    }
}