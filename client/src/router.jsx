import { createBrowserRouter } from 'react-router-dom'

// pages
import App from './pages/App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
])

export default router