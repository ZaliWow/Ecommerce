import "../styles/presentation.css"
import { Button } from "@mui/material"
import { Instagram } from "@mui/icons-material"
export function Presentation(params) {
    return(
        <main className="body-presentation">
           <div className="presentation">
            <header>
            <h3>Sobre Nosotros</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsa non culpa vitae ratione, dolor officia quia accusamus sed veniam dignissimos iure voluptate reprehenderit doloremque voluptates. Eaque ad illo fugiat?</h4>
            <Button sx={{color:'white', border:'1px solid white'}}>Ver Catalogo</Button>
            <Button sx={{color:'orange', }}><Instagram></Instagram></Button>
            </header>
            <footer>
                <h3>
                <img src="images/background.jpg" alt="" />
                </h3>
            </footer>
           </div>

        </main>
    )
}