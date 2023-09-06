import Button from "../Shared/Button/button"
import '../Pages/Account.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/jwtContext";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { User } from "../../Services/api";



const Account = () => {
    
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState("");
    
    const onSubmit = (formData) => {
        User.post("login", formData)
        .then((res) => {
            localStorage.setItem("token", res.data.accessToken);
            localStorage.setItem("user", res.data.user.email);
            localStorage.setItem("name", res.data.user.name);
            localStorage.setItem("id", res.data.user.id);
            setUser(res.data.accessToken);
            navigate("/profile");
        })
        .catch((error) => {
            if (error.response && error.response.status === 401) {
            setErrorMessage("Contraseña incorrecta. Inténtalo de nuevo.");
            } else {
            setErrorMessage("Error en el servidor. Inténtalo más tarde.");
            }
        });
    };
    
    return(
        <div className="inicio-sesion">
            <h2>INICIA SESIÓN</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" id="email" name="email" placeholder="Email" {...register("email", { required: true })}/>
                <br />
                <input type="password" id="password" name="password" placeholder="Contraseña"  {...register("password", { required: true })} />
                {errors.password && <span className="error-message">Este campo es requerido</span>}
                <br />
                <Button text="Iniciar sesión" value="inicia sesion" type="submit"/>
                {errorMessage && <span className="error-message">{errorMessage}</span>}
                <Link to="/register" className="register">O regístrate</Link>
            </form>
        </div>
    )
}

export default Account