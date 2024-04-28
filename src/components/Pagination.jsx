import { Button } from "@mui/material"
import "../styles/pagination.css"


export function Pagination({numberPages, actualPage, setActualPage}) {
    
const handleNextPage = () =>{
    if(numberPages >  actualPage  ){
        setActualPage(actualPage +  1)
    }
}
const handlePrevPage = () =>{
    if(actualPage != 1){
        setActualPage(actualPage -  1)
    }
}


    return(
        <div className="body-pagination">
        <Button onClick={handlePrevPage} sx={{ color:'white', border:'1px solid white' , margin:'1rem'}}>-</Button>
       <h3>Pagina {actualPage}/{numberPages}</h3>
       
        <Button onClick={handleNextPage} sx={{ color:'white', border:'1px solid white' , margin:'1rem'}}>+</Button>
        </div>
    )
}