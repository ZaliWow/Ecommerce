import "../styles/aboutus.css"
export function AboutUs(){
    return(
        <div style={{width:'100%' , display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h1>Sobre nosotros</h1>
       
        <div className="body-aboutUs">
        
        <div class="about-me">
    <img src="/images/Logo.png" alt="Mi Foto" />
    <h2>¿Quiénes somos?</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique delectus quas temporibus, fugit eos libero fuga inventore quae. Fugit, quod? Ex, reiciendis. Nesciunt veritatis nulla vero iure ratione obcaecati quia.</p>
</div>
<div class="about-me">
    <img src="/images/Logo.png" alt="Mi Foto" />
    <h2>Reconocimientos y premios</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique delectus quas temporibus, fugit eos libero fuga inventore quae. Fugit, quod? Ex, reiciendis. Nesciunt veritatis nulla vero iure ratione obcaecati quia.</p>
</div>
<div class="about-me">
    <img src="/images/Logo.png" alt="Mi Foto" />
    <h2>¿Por qué elegirnos?</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique delectus quas temporibus, fugit eos libero fuga inventore quae. Fugit, quod? Ex, reiciendis. Nesciunt veritatis nulla vero iure ratione obcaecati quia.</p>
</div>

        
        </div>
        </div>
    )
}