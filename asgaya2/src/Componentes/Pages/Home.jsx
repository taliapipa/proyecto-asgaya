import './Home.css'
import Banner from "../../Assets/Frame 15banner-home.png"
import Vaca from "../../Assets/vaca.png"
import Pollo from "../../Assets/pollo.png"
import Zana from "../../Assets/zana.png"



const Home =()=>{
    return(
        <div>
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
        </div>
    )
}

export default Home