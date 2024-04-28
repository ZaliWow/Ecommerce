import { createContext, useState } from "react";

// crear contexto
export const CartContext = createContext()
// proveer contexto

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }
            setCart(prevState => ([
                ...prevState,
                {
                    ...product,
                    quantity:1
                }
            ]))  

    }
    const clearToCart = () => {
        setCart([])
    }
    const isProductInCart = product =>{
       return cart.some(item => item.id ===product.id)
      }
    const isCartVoid = cart =>{
        const sizeCart = cart.length
        if(sizeCart > 0  ){
            return true
        }
        return false
    }
    const deleteProductCart = product =>{
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart.splice(productInCartIndex, 1)
            return setCart(newCart)
        }

    }



    return (
        <CartContext.Provider value={
            {
                cart,
                clearToCart,
                addToCart,
                isProductInCart,
                isCartVoid,
                deleteProductCart
            }
        }>
            {children}
        </CartContext.Provider>
    )
}

