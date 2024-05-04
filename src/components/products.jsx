
import "../styles/products.css"
import { useCart } from "../hooks/useCart"
import { Add } from "@mui/icons-material"
import { AddShoppingCart } from "@mui/icons-material"
import { Button } from "@mui/material"
import { Filters } from "./Filters"
import { Pagination } from "./Pagination"

export function Products({products}) {
 
 
    const {addToCart, isProductInCart,  }= useCart()
    return(
        <>
        
     
        <main className="body-products" >
            
            <ul>
                {
                    products.map (product=>(
                        <div  key={product.id} className="products">
                            <div className="body-img">
                            <img src={product.image} alt="" />
                            </div>
                       
                            <div className="body-information">
                        <h4> {product.title}  <span style={{color:'red'}}>$ {product.price}</span></h4>
                       
                       <span>{product.description}</span>
                       

                       

                            </div>
                            <div className="body-button">
                      <Button onClick={() => addToCart(product) }>{isProductInCart(product) ? <Add sx={{color:'green',border:'1px solid green', padding:'4px', borderRadius:'10%'}}></Add> :<AddShoppingCart sx={{color:'black', border:'1px solid black', padding:'4px', borderRadius:'10%'}}></AddShoppingCart> }</Button>        
                    
                      </div>
                        
                    
                         </div>
                       )   )
                }
            </ul>
        
        </main>
    


        </>
    )
    
}