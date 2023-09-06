import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { User } from '../../Services/api';
import Button from '../Shared/Button/button';
import '../Pages/Register.css'

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (formData) => {
    User.post("register", formData)
      .then((res) => {
        if (res.data && res.data.success) {
          // Actualizar el estado del usuario aquí si es necesario
          alert("Usuario creado con éxito");
          // Redirigir a la página de inicio de sesión
          window.location.href = '/login';
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Error al crear usuario. Inténtalo de nuevo.");
      });
  };

  return (
    <div className="registrate">
      <h2>REGÍSTRATE</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" id="nombre" name="name" placeholder="Nombre" {...register("name", { required: true })} />
        <br />
        <input type="text" id="apellido" name="surname" placeholder="Apellido" {...register("surname", { required: true })} />
        <br />
        <input type="text" id="email" name="email" placeholder="Email" {...register("email", { required: true })} />
        <br />
        <input type="password" id="password" name="password" placeholder="Contraseña" {...register("password", { required: true })} />
        <br />
        <input type="password" id="repit-password" name="repit-password" placeholder="Repetir Contraseña" />
        <br />
        <Button type="submit" text="Regístrate">Regístrate</Button>
        <Link to="/login" className="register">O inicia sesión</Link>
      </form>
    </div>
  );
};

export default Register;
