import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import AppLayout from './shared/ui/AppLayout'
import HomePage from './features/home/HomePage'
import { CartProvider } from './context/CartContext'
import CategoryPage from './features/category/CategoryPage'
// import CartPage from './features/cart/CartPage'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path:"/categories", element:<CategoryPage />},
      // { path: '/category/:id', element: <CategoryPage /> },
      // { path: '/cart', element: <CartPage /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
 <StrictMode>
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
</StrictMode>
)