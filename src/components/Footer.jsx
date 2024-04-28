 import "../styles/footer.css"
 import { useCart } from "../hooks/useCart"
 import { useFilters } from "../hooks/useFilters"
 export function Footer() {
    const {filtersBody} = useFilters()
    const {cart} = useCart()
    return(
        <footer className="footer">
            <h4>Categoria: {filtersBody.category} , Precio: {filtersBody.minPrice}</h4>
        <h4>{JSON.stringify(cart, null, 2)}</h4>
        </footer>
    )
    
}