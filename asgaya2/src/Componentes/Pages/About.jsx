import './About.css'
import AboutBanner from "../../Assets/sobrenosotrosbanner.png"
import Gallinas from "../../Assets/gallinas.png"
import Button from '../Shared/Button/button'

const About = ()=>{
    return (
        <div>
            <div className='banner-about'>
                <img src={AboutBanner} alt='banner-about' className='banner-about-img'/>
                <h1 className='title-about'>SOBRE NOSOTROS</h1>
            </div>
            <div className='quienessomos-part'>
                <div className='quienessomos-part-text'>
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
                <div className='gallinas-quienessomos'>
                    <img src={Gallinas} alt='gallinas' />
                </div>
            </div>

            <div className='mision-part'>
                <div className='cerdos-quienessomos'>
                    <img src={Gallinas} alt='cerdos' />
                </div>
                <div className='mision-part-text'>
                    <h2>
                        MISIÓN
                    </h2>
                    <p>
                        Creemos que dar el medio natural a aquellas personas que no pueden crear su propia granja, ya bien porque vivan en la ciudad o no tengan los medios para poder, pero siempre con conciencia y ética. Por eso creamos la idea de una granja desde casa con los productos naturales como si hubieses salido al campo a recogerlos.
                    </p>
                </div>

            </div>

            <div className='quienessomos-part'>
                <div className='quienessomos-part-text'>
                    <h2>
                        VISIÓN
                    </h2>
                    <p>
                        Proporcionar acceso a productos 100% naturales y directamente desde la granja con un solo click. 
                    </p>
                </div>
                <div className='gallinas-quienessomos'>
                    <img src={Gallinas} alt='gallinas' />
                </div>
            </div>

            <div className='mision-part'>
                <div className='cerdos-quienessomos'>
                    <img src={Gallinas} alt='cerdos' />
                </div>
                <div className='mision-part-text'>
                    <h2>
                        VALORES
                    </h2>
                    <p>
                        Eco-friendly, cultry-free, sostenibilidad, calidad e integridad.
                    </p>
                </div>

            </div>

            <div className='banner-blog'>
                <h1>CONOCE MÁS SOBRE NOSOTROS EN NUESTRO BLOG</h1>
                <Button text='Leer más' />
            </div>

            
        </div>

    )
}

export default About