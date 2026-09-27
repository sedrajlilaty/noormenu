import { createContext, useState, useContext } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [showToast, setShowToast] = useState(false)

  function triggerToast() {
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }

  function addToCart(product, quantity = 1, selectedOptions = null) {
    const optionsKey = selectedOptions ? JSON.stringify(selectedOptions) : null
    const cartId = optionsKey ? `${product.id}-${optionsKey}` : product.id

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === cartId)

      if (existing) {
        return prevCart.map((item) =>
          item.id === cartId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [...prevCart, { ...product, id: cartId, quantity, selectedOptions }]
    })

    triggerToast()
  }

  function increaseQuantity(productId) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )

    triggerToast()
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

  function clearCart() {
    setCart([])
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.priceNew * item.quantity, 0)

  return (
    <CartContext.Provider value={{ totalItems, totalPrice, addToCart, cart, increaseQuantity, decreaseQuantity, clearCart, showToast }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}