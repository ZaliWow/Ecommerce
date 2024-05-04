import { useState, useId, useContext } from "react"
import { FiltersContext } from "../context/filters"
import { useFilters } from "../hooks/useFilters"
import "../styles/filters.css"

import {Select} from "@mui/material"
import {MenuItem} from "@mui/material"

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
            <h1>Nuestros productos</h1>
      <span>Filtrar</span>
    <Select
        name="type"
        onChange={handleChangeCategory}
      
        >
          <MenuItem value="Hamburguesa">Hamburguesas</MenuItem>
          <MenuItem  value="Saclhipapas">Salchipapas</MenuItem>
          <MenuItem value="Carnes">Carnes</MenuItem>
          <MenuItem  value="Bebidas">Bebidas</MenuItem>
          <MenuItem  value="Bebidas espciales">Bebidas especiales</MenuItem>
        </Select>
    

     
        </main>
        
        
        
        </>
    )
    
}