import { useState, useId, useContext } from "react"
import { FiltersContext } from "../context/filters"
import { useFilters } from "../hooks/useFilters"
import "../styles/filters.css"

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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
        max="800" 
        id={minPriceId}
        onChange={handleChangeMinPrice}
        value={filtersBody.minPrice}
        />
        <span>{filtersBody.minPrice}</span>
   </div>
   
   <div>
      <FormControl sx={{ m: 1, minWidth: 120,  }}>
        <InputLabel sx={{color:'black'}} id={minPriceId}>Type</InputLabel>
        <Select
          labelId={minPriceId}
          value="type"
          label="type"
         onChange={handleChangeCategory}
          sx={{color:'black', borderColor:'white'}}
        >
          <MenuItem value="all">todo</MenuItem>
          <MenuItem value="men's clothing">Ropa masculina</MenuItem>
          <MenuItem value="jewelery">Joyeria</MenuItem>
        </Select>
        <FormHelperText sx={{color:'black', textAlign:'center'}}>Category</FormHelperText>
      </FormControl>
     
    </div>
        </main>
        
        
        
        </>
    )
    
}