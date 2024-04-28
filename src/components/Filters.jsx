import { useState, useId, useContext } from "react"
import { FiltersContext } from "../context/filters"
import { useFilters } from "../hooks/useFilters"
import "../styles/filters.css"



export function Filters({}) {
   
const minPriceId = useId()
const categoryId = useId()

const {setFiltersBody, filtersBody}= useFilters()



   const handleChangeMinPrice = (event) =>{
    
    setFiltersBody(prevState => ({
        ...prevState,
        minPrice:event.target.value,

    }))
   }
   const handleChangeCategory = (event) =>{
    setFiltersBody(prevState => ({
        ...prevState,
        category:event.target.value
        
    }))
   }
   
   return(
        <>
        <main className="body-filters">
   <div className="container-input">
    
   <label htmlFor={minPriceId}>Precio</label>
        <input 
        type="range" 
        min="0" 
        max="100" 
        id={minPriceId}
        onChange={handleChangeMinPrice}
        value={filtersBody.minPrice}
        />
       
        <span>{filtersBody.minPrice}</span>
   </div>
   <div>
    <label htmlFor={categoryId}>Category</label>
    <select  id={categoryId} onChange={handleChangeCategory}>
        <option value="all">Todo</option>
        <option value="men's clothing">Ropa Masculina</option>
        <option value="jewelery">joyeria</option>
    </select>
   </div>
        </main>
        
        
        
        </>
    )
    
}