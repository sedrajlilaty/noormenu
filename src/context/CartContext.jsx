import { createContext, useState, useContext } from "react"

const CartContext = createContext()
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [showToast, setShowToast] = useState(false)
function addToCart(product) {
  setCart((prevCart) => {
    const existing = prevCart.find((item) => item.id === product.id)

    if (existing) {
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    }

    return [...prevCart, { ...product, quantity: 1 }]
  })

  setShowToast(true)
  setTimeout(() => setShowToast(false), 2000)
}
function increaseQuantity(productId) {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  )
}

function decreaseQuantity(productId) {
  setCart((prevCart) =>
    prevCart
      .map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  )
}
const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
const totalPrice = cart.reduce((sum, item) => sum + item.priceNew * item.quantity, 0)
  return (
    <CartContext.Provider value={{totalItems,totalPrice,addToCart,cart,increaseQuantity,decreaseQuantity,showToast }}>
      {children}
    </CartContext.Provider>

    
  )
}

export function useCart() {
  return useContext(CartContext)
}