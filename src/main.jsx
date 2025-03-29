import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "./components/ui/provider"
import { AnimatePresence } from 'framer-motion';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <AnimatePresence mode="wait">
        <App />
      </AnimatePresence>
    </Provider>
  </StrictMode>,
)
