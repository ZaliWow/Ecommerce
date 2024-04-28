import "../styles/cartShop.css"
import { useCart } from "../hooks/useCart"
import { DeleteForever } from "@mui/icons-material"
import { ShoppingCart } from "@mui/icons-material"
import { Add } from "@mui/icons-material"
import { Button } from "@mui/material"
import { Delete } from "@mui/icons-material"


export function CartShop({ }) {

    const { clearToCart, cart, isCartVoid, deleteProductCart, addToCart } = useCart()

    return (
        <>

            <label className="button-cartShop" htmlFor="cartShop"><ShoppingCart sx={{ color: 'red' }}></ShoppingCart></label>
            <input id="cartShop" type="checkbox" />

            <aside className="body-cartShop" id="body-cartShop">
               <header className="title-cart">
               <h2>Tus compras</h2>
                <Button onClick={() => clearToCart()}><DeleteForever sx={{color:'red'}}></DeleteForever></Button>

               </header>
               


                {
                    isCartVoid(cart) ?
                        <div className="products-in-cart">
                            {
                                cart.map(product => (
                                    <div key={product.id} className="products">
                                        <h6> {product.title}</h6>
                                        <img src={product.image} alt="" />
                                        <h5>$ {product.price} , Cantidad : <span>{product.quantity}</span></h5>
                                        <div className="container-buttons-cart">
                                            <Button onClick={() => deleteProductCart(product)} ><Delete sx={{ color: 'red' }}></Delete></Button>
                                            <Button onClick={() => addToCart(product)}><Add sx={{ color: 'green' }}></Add></Button>
                                        </div>
                                    </div>
                                ))

                            }

                        </div>




                        : <h3>Aún no tienes productos en tu carrito de compra </h3>


                }
            </aside>

        </>
    )

}