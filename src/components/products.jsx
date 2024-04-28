
import "../styles/products.css"
import { useCart } from "../hooks/useCart"
import { Add } from "@mui/icons-material"
import { AddShoppingCart } from "@mui/icons-material"
import { Button } from "@mui/material"
import { Filters } from "./Filters"

export function Products({products}) {
 
 
    const {addToCart, isProductInCart,  }= useCart()
    return(
        <>
        <header className="title-products">
            
        <h1>Productos disponibles</h1>
        <Filters></Filters>

        </header>
       
        <main className="body-products" >
            
            <ul>
                {
                    products.map (product=>(
                        <div  key={product.id} className="products">
                        <h6> {product.title}</h6>
                        <img src={product.image} alt="" />
                        <h6>$ {product.price}</h6>
                      
                        <Button onClick={() => addToCart(product) }>{isProductInCart(product) ? <Add sx={{color:'green'}}></Add> :<AddShoppingCart sx={{color:'white', border:'1px solid white', padding:'4px', borderRadius:'10%'}}></AddShoppingCart> }</Button>        
                        </div>
                       )   )
                }
            </ul>
        </main>
    
        </>
    )
    
}