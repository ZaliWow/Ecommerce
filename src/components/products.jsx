
import "../styles/products.css"
import { useCart } from "../hooks/useCart"

export function Products({products}) {
 
 
    const {addToCart, isProductInCart,  }= useCart()
    return(
        <>
        <header className="title-products">
        <h1>Productos disponibles</h1>
        <h4> -------- Puedes comprar tantos productos quieras -------- </h4>
        </header>
      
        <main className="body-products" >
            
            <ul>
                {
                    products.map (product=>(
                        <div  key={product.id} className="products">
                        <h6> {product.title}</h6>
                        <img src={product.image} alt="" />
                        <h6>$ {product.price}</h6>
                      
                        <button onClick={() => addToCart(product) }>{isProductInCart(product) ? "+" :"add"}</button>        
                        </div>
                       )   )
                }
            </ul>
        </main>
    
        </>
    )
    
}