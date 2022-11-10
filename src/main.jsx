import React from 'react'
import ReactDOM from 'react-dom/client'
import { Padre } from './07-tarea-memo/Padre'
//import { CallbackHook } from './06-memos/CallbackHook'
//import { MemoHook } from './06-memos/MemoHook'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterCustomHook } from './01-useState/CounterCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { SimpleFormCustomHook } from './02-useEffect/SimpleFormCustomHook'
//import { HooksApp } from './HooksApp'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { Memorize } from './06-memos/Memorize'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Padre/>
  </React.StrictMode>
)
