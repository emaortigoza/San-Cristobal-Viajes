import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './index.css'
import { initfirebase } from './firebase/config.js'

initfirebase()

library.add(fas)
const root = ReactDOM.createRoot(document.getElementById('root'))

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
