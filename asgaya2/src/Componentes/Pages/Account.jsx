import Button from "../Shared/Button/button"
import '../Pages/Account.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../Context/jwtContext";
import { useForm } from "react-hook-form";
import {API} from "../../Services/api"
import { useContext } from "react";


const Account = () => {
    
const { setJwt } = useContext(JwtContext)

const navigate = useNavigate()
const { register, handleSubmit } = useForm();

    const onSubmit = (formData) => {
    API.post("login", formData).then((res)=>{
    console.log(res.data);
    localStorage.setItem("token", res.data.accessToken)
    localStorage.setItem("user", res.data.user.email)
    setJwt(res.data.accessToken)
    navigate("/profile")
    })
    
};
    return(
        <div className="inicio-sesion">
            <h2>INICIA SESIÓN</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" id="email" name="email" placeholder="Email" {...register("email", { required: true })}/>
                <br />
                <input type="password" id="password" name="password" placeholder="Contraseña"  {...register("password", { required: true })} />
                <br />
                <Button text="Iniciar sesión" value="inicia sesion" type="submit"/>
                <Link to="/register" className="register">O regístrate</Link>
            </form>
        </div>
    )
}

export default Account