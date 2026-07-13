import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, <StrictMode><App /></StrictMode>)
} else {
  ReactDOM.createRoot(rootElement).render(<StrictMode><App /></StrictMode>)
}
