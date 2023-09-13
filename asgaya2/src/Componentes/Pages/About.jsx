import './About.css'
import AboutBanner from "../../Assets/sobrenosotrosbanner.png"
import Gallinas from "../../Assets/gallinas.png"
const About = ()=>{
    return (
        <div>
            <div className='banner-about'>
                <img src={AboutBanner} alt='banner-about' className='banner-about-img'/>
                <h1 className='title-about'>SOBRE NOSOTROS</h1>
            </div>
            <div>
                <div>
                    <h2>
                        QUIENES SOMOS
                    </h2>
                    <p>
                        No tratamos solo con cajas de suscripción de productos naturales, sino que gracias a las aportaciones de los clientes alimentamos a los animales de las granjas adheridas.
                        <br/>
                        Es por ello que a la vez que el cliente recibe los productos naturales provenientes directamente desde la granga, aporta su grano de pienso para todos los animales.
                        <br/>
                        ¡Como tener una granja en casa!
                    </p>
                </div>
                <img src={Gallinas} alt='gallinas' className='gallinas-quienessomos'/>

            </div>
        </div>

    )
}

export default About