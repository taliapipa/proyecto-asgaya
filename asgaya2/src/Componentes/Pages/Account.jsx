import Button from "../Shared/Button/button"
import '../Pages/Account.css'
import { Link } from 'react-router-dom';

const Account = () => {

    return(
        <div className="inicio-sesion">
            <h2>INICIA SESIÓN</h2>
            <form>
                <input type="text" id="email" name="email" placeholder="Email"/>
                <br />
                <input type="password" id="password" name="password" placeholder="Contraseña" />
                <br />
                <Button text="Iniciar sesión"/>
                <Link to="/register" className="register">O regístrate</Link>
            </form>
        </div>
    )
}

export default Account