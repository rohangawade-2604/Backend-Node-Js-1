import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowswerRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

createRoot(document.getElementById('root')).render(
  <BrowswerRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowswerRouter>



)
