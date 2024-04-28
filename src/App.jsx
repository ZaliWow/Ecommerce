
import { useContext, useEffect, useState } from 'react'
import { Products } from './components/products'
import { Footer } from './components/Footer'
import { useFilters } from './hooks/useFilters'
import { CartShop } from './components/CartShop'
import { CartProvider } from './context/cart'
import { Presentation } from './components/Presentation'
import { Pagination } from './components/Pagination'


function App() {
 
const {filtersProducts, setFiltersBody, filtersBody}= useFilters()
const [products, setProducts] = useState([]);
const [haveProducts, setHaveProducts] =useState (false) 
const [productQuantity, setProductQuantity] = useState(4)
const [actualPage, setActualPage]= useState(1)


const finalQuantity =  actualPage * productQuantity
const inicialQuantity = finalQuantity - productQuantity
const filteredProducts = filtersProducts(products)

const numberPages = Math.ceil(filteredProducts.length / productQuantity)

useEffect((
) => {
  if(actualPage > numberPages   ){
    setActualPage(1)
  }
},[actualPage,numberPages])
const nProducts = filteredProducts.slice(inicialQuantity, finalQuantity)



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
        
        }
       
      };
     
      fetchData();
    }, []);


  return (
    <CartProvider>

   <Presentation></Presentation>
     <CartShop></CartShop>
     <Products products={nProducts}></Products>
 
     <Pagination numberPages={numberPages} actualPage={actualPage} setActualPage={setActualPage}></Pagination>
    </CartProvider>
  )
}

export default App
