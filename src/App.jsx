
import { useContext, useEffect, useState } from 'react'
import { Products } from './components/products'
import { useFilters } from './hooks/useFilters'
import { CartShop } from './components/CartShop'
import { CartProvider } from './context/cart'
import { Presentation } from './components/Presentation'
import { Pagination } from './components/Pagination'
import { AboutUs } from './components/AboutUs'


function App() {
 
const {filtersProducts}= useFilters()
const [products, setProducts] = useState([]);
const [haveProducts, setHaveProducts] =useState (false) 
const filteredProducts = filtersProducts(products)
//pagination states

const [productQuantity, setProductQuantity] = useState(6)
const [actualPage, setActualPage]= useState(1)

const finalQuantity =  actualPage * productQuantity
const inicialQuantity = finalQuantity - productQuantity
const numberPages = Math.ceil(filteredProducts.length / productQuantity)

useEffect((
) => {
  if(actualPage > numberPages   ){
    setActualPage(1)
  }
  else if (numberPages === 0){
    setActualPage(0)
  }
},[actualPage,numberPages])

const nProducts = filteredProducts.slice(inicialQuantity, finalQuantity)



  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_END_POING_READ_PRODUCTS}select=*`,
          {headers: {
              "apikey": `${import.meta.env.VITE_KEY_SUPABASE}`,

           
              "Content-Type": "application/json"
            }});
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
     <Pagination numberPages={numberPages} actualPage={actualPage} setActualPage={setActualPage}></Pagination>
     <Products products={nProducts}></Products>
    <AboutUs></AboutUs>
        </CartProvider>
  )
}

export default App
