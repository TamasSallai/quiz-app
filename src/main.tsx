import React from 'react'
import ReactDOM from 'react-dom/client'
import { QuizProvider } from './context'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
)
