import path, { dirname } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { fileURLToPath } from 'url'
import autoprefixer from 'autoprefixer'

const _filename = fileURLToPath(import.meta.url)
const _dirname = dirname(_filename)
export default function () {
  return {
    entry: `${_dirname}/src/index.tsx`,
    output: {
      filename: '[name].js',
      path: path.resolve(_dirname, 'dist')
    },
    mode: 'development',
    // 'eval-source-map'
    devtool: false,
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx']
    },
    cache: {
      type: 'filesystem'
    },

    optimization: {
      minimize: false
    },
    module: {
      rules: [
        {
          test: /\.(tsx|ts)$/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-react',
                {
                  runtime: 'classic'
                }
              ],
              '@babel/preset-typescript'
            ]
          }
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [autoprefixer]
                }
              }
            }
          ]
        }
      ]
    },
    devServer: {
      hot: true,
      open: true,
      port: 8081
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${_dirname}/public/template.html`
      })
    ]
  }
}
