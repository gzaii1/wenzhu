import path, { dirname } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { fileURLToPath } from 'url'
console.log(__dirname)
const _filename = fileURLToPath(import.meta.url)
const _dirname = dirname(_filename)
export default function () {
  return {
    entry: `${_dirname}/src/index.js`,
    mode: 'development',
    output: {
      filename: '[name].js',
      path: path.resolve(_dirname, 'dist')
    },
    devServer: {
      hot: true,
      open: true,
      port: 8081
    },
    cache: false,
    plugins: [
      new HtmlWebpackPlugin({
        template: `${_dirname}/public/template.html`
      })
    ]
  }
}
