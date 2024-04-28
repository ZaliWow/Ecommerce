import { createContext } from "react";
import { useState } from "react";
// creo mi contexto
export const FiltersContext = createContext()
// proveo mi contexto
export function FiltersProvider({children}){

const [filtersBody, setFiltersBody]=useState({
    category:"all",
            minPrice:0
})

    return(
        <FiltersContext.Provider
        value={{
            filtersBody,
            setFiltersBody
        }}>
{children}
        </FiltersContext.Provider>
        )
    
}
