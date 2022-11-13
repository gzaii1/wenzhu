import * as React from 'react'
import { createRoot } from 'react-dom/client'
// @ts-ignore
import Editor from '@wz/editor'
import './normalize.css'

const root = createRoot(document.getElementById('root'))

const App = () => {
  return <Editor />
}
root.render(<App />)
