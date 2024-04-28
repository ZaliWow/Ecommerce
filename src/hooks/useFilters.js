import { FiltersContext } from '../context/filters'
import { useContext } from 'react'

export function useFilters() {
    
//EXAMPLE FOR TIKTOK 
//const [filtersBody, setFiltersBody]=useState({
// category:"all",
//        minPrice:0
//})

    const {filtersBody, setFiltersBody} = useContext(FiltersContext)

    const filtersProducts = (products)=>{
      return products.filter( product =>{
        return(
          product.price >= filtersBody.minPrice && (
  
            filtersBody.category === 'all' ||
            product.category === filtersBody.category
          )
        )
      } )
    }
    return{filtersProducts, setFiltersBody, filtersBody}
  }