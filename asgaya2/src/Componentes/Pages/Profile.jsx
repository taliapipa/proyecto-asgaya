import NavAccount from "../Core/Nav-Account/NavAccount"
import './Profile.css'

const Profile =()=>{

    return(
<div>
<NavAccount/>
        <div>
            <div>
                <img src="" alt=""/>
                <h2>{}</h2>
            </div>
            <div>
                <h2>Suscripción y facturación</h2>
                <p>{}</p>
                <p>Contraseña</p>
                <p>*********** 1234</p>
                <p>Tu próxima facturación es el 20 de octubre de 2022</p>
            </div>
            <div>
                <h2>Dirección de envío</h2>
                <p>Calle X nº1 1ºB</p>
            </div>
            <div>
                <h2>Detalles de la suscripción</h2>
                <h2>VACA</h2>
            </div>
            <div>
                <h2>Mis pedidos</h2>
            </div>
        </div>
</div>

    )
}

export default Profile