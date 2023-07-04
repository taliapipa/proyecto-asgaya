import Button from "../Shared/Button/button"
import '../Pages/Register.css'
import { Link } from 'react-router-dom';

const Register =()=>{

    return(
        <div className="registrate">
        <h2>INICIA SESIÓN</h2>
        <form>
            <input type="text" id="nombre" name="nombre" placeholder="Nombre"/>
            <br />
            <input type="text" id="apellido" name="apellido" placeholder="Apellido"/>
            <br />
            <input type="text" id="email" name="email" placeholder="Email"/>
            <br />
            <input type="password" id="password" name="password" placeholder="Contraseña" />
            <br />
            <input type="password" id="repit-password" name="repit-password" placeholder="Repetir Contraseña" />
            <br />
            <Button text="Regístrate"/>
            <Link to="/login" className="register">O inicia sesión</Link>
        </form>
    </div>
    )
}

export default Register