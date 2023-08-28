import Button from "../Shared/Button/button"
import '../Pages/Account.css'
import { Link } from 'react-router-dom';
import { useState } from "react";

const initial_state = {
    email: "",
    password: ""
}

const Account = ({loginUser}) => {


    const [formData, setFormData] = useState(initial_state)


    const handleInput = (ev) => {
        const { name, value } = ev.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleClick = () => {
        loginUser(formData)
    }
    
    return(
        <div className="inicio-sesion">
            <h2>INICIA SESIÓN</h2>
            <form onSubmit={(ev)=>ev.preventDefault()}>
                <input type="text" id="email" name="email" placeholder="Email" onInput={handleInput} value={formData.email}/>
                <br />
                <input type="password" id="password" name="password" placeholder="Contraseña"  onInput={handleInput} value={formData.password} />
                <br />
                <Button text="Iniciar sesión" value="inicia sesion" type="submit" onClick={handleClick}/>
                <Link to="/register" className="register">O regístrate</Link>
            </form>
        </div>
    )
}

export default Account