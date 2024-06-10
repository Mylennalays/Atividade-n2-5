import Home from './pages/home/index.tsx'
import Sobre from './pages/sobre/index.tsx'
import NotFound from './pages/not-found/index.tsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <NotFound />},
  { path: '/sobre', element: <Sobre />}
])

export default router