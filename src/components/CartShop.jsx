import "../styles/cartShop.css"
import { useCart } from "../hooks/useCart"



export function CartShop({}) {

    const {clearToCart, cart, isCartVoid, deleteProductCart, addToCart}= useCart()
   
    return(
        <>

        <label className="button-cartShop" htmlFor="cartShop">CartShop</label>
        <input id="cartShop" type="checkbox"  />
        <aside className="body-cartShop" id="body-cartShop">
            <h1>carrito de compras</h1>
            <button onClick={()=> clearToCart()}>Limpiar carrito</button>
            {
isCartVoid(cart) ? 
<div className="products-in-cart">
{
cart.map (product =>(
<div  key={product.id} className="products">
                        <h6> {product.title}</h6>
                        <img src={product.image} alt="" />
                        <h5>$ {product.price} , Cantidad : <span>{product.quantity}</span></h5>
                        <div className="container-buttons-cart">
                        <button  className="container-buttons-cart-button-delete"onClick={()=> deleteProductCart(product)} >Cancelar</button>
                        <button className="container-buttons-cart-button-plus"onClick={()=> addToCart(product)}>+</button>
                        </div>
    </div>
) )

}

</div>




: <h3>Aún no tienes productos en tu carrito de compra </h3>


            }
        </aside>
        
        </>
    )
    
}