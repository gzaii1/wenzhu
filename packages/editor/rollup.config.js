import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import { fileURLToPath } from 'url'
import url from '@rollup/plugin-url'
import { dirname, join } from 'path'

const _filename = fileURLToPath(import.meta.url)
const _dirname = dirname(_filename)

const babelOptions = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
  exclude: '**/node_modules/**'
}

export default {
  input: './src/main.tsx',
  output: [
    {
      file: 'dist/lib/index.js',
      format: 'umd',
      name: '@wz/editor'
    },
    {
      file: 'es/index.js',
      format: 'es'
    }
  ],
  external: ['react'],
  plugins: [
    resolve(),
    // postcss({
    //     extract: true,
    //     process: processLess
    // }),
    url({
      fileName: '[dirname][hash][extname]',
      sourceDir: join(_dirname, 'src/statics')
    }),
    babel(babelOptions)
  ]
}
