import { useContext, useState } from "react";
import { CartContext } from "../context/cart";


export const useCart = () => {
    const context = useContext(CartContext)
    if (context === undefined){
      throw new Error('useCart must be used whithin a cartProvider')
    }
    
  

    return(context)
    
}