
import { useContext, useEffect, useState } from 'react'
import { Products } from './components/products'
import { Footer } from './components/Footer'
import { useFilters } from './hooks/useFilters'
import { CartShop } from './components/CartShop'
import { CartProvider } from './context/cart'
import { Presentation } from './components/Presentation'


function App() {
 
const {filtersProducts, setFiltersBody, filtersBody}= useFilters()
const [products, setProducts] = useState([]);
const [haveProducts, setHaveProducts] =useState (false) 
  
const filteredProducts = filtersProducts(products)

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(import.meta.env.VITE_URL_API_PRODUCTS);
          if (response.ok) {
            const jsonData = await response.json();
            setProducts(jsonData);
            setHaveProducts(true)
          } else {
            console.error('Error al obtener los datos:', response.status);
          }
        } catch (error) {
          console.error('Error de red:', error);
        }
       
      };
     
      fetchData();
    }, []);

  return (
    <CartProvider>

   <Presentation></Presentation>
     <CartShop></CartShop>
     <Products products={filteredProducts}></Products>
 
    
    </CartProvider>
  )
}

export default App
