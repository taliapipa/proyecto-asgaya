import './Home.css'
import Banner from "../../Assets/Frame 15banner-home.png"
import Vaca from "../../Assets/vaca.png"
import Pollo from "../../Assets/pollo.png"
import Zana from "../../Assets/zana.png"
import Button from '../Shared/Button/button'
import Huevos from "../../Assets/Frame 81huevos.png"
import VacaSus from "../../Assets/vacasus.png"
import Gallinasus from "../../Assets/gallinasus.png"
import Ovejasus from "../../Assets/ovejasus.png"


const Home =()=>{
    return(
        <div className='home'>
            <img src={Banner} alt='Banner' className='banner'/>
            <div className="div-ofrecemos">
                <h2>¿Qué ofrecemos?</h2>
                <div className='ofrecemos'>
                <div className='vaca'>
                    <div className='vaca-circulo'>
                        <img src={Vaca} alt='vaca-icon'/>
                    </div>
                    <div className='texto'>
                    <p>Elige la caja de suscripción mensual que más se ajuste a ti</p>
                    </div>
                </div>
                <div className='vaca'>
                    <div className='vaca-circulo'>
                        <img src={Zana} alt='zana-icon' />
                    </div>
                    <div className='texto'>
                        <p>Consigue los productos naturales que necesites</p>
                    </div>
                </div>
                <div className='vaca'>
                    <div className='vaca-circulo'>
                        <img src={Pollo} alt='pollo-icon'/>
                    </div>
                    <div className='texto'>
                        <p>Apadrina el animal que tu quieras</p>
                    </div>
                </div>
                </div>
            </div>

            <div className='div-nosotros'>
                <div className='sobre-nosotros'>
                    <h2>SOBRE NOSOTROS</h2>
                    <p>No tratamos solo con cajas de suscripción de productos naturales, sino que gracias a las aportaciones de los clientes alimentamos a los animales de las granjas adheridas.
                    <br/>
                    Es por ello que a la vez que el cliente recibe los productos naturales provivientes directamente de la granja, aportan su grano de pienso para todos los animales.
                    <br/>
                    ¡Como tener una granja en casa!
                    </p>
                    <Button text="Leer más"/>
                </div>
                <div className='img-huevos'>
                    <img src={Huevos} alt='img-huevos'/>
                </div>
            </div>
            <div className='suscripciones'>
                <h2>SUSCRIPCIONES</h2>
                <ul>
                    <li className='li-sus'>   
                        <img src={Gallinasus} alt='gallina-suscripcion' className='img-sus'/>
                        <h5 className='titulo-sus'>Gallina</h5>
                        <p className='precio-sus'>4'99€</p>
                        <Button text='Añadir'/>
                    </li>
                    <li className='li-sus'>   
                        <img src={Ovejasus} alt='oveja-suscripcion' className='img-sus'/>
                        <h5 className='titulo-sus'>Oveja</h5>
                        <p className='precio-sus'>7'99€</p>
                        <Button text='Añadir'/>
                    </li>
                    <li className='li-sus'>   
                        <img src={VacaSus} alt='vaca-suscripcion' className='img-sus'/>
                        <h5 className='titulo-sus'>Vaca</h5>
                        <p className='precio-sus'>10'99€</p>
                        <Button text='Añadir'/>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Home