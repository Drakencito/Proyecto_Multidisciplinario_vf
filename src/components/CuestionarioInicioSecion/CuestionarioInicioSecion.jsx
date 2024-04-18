import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './CuestionarioInicioSecion.css';

function CuestionarioIniciSecion() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include' 
      });

      if (response.ok) {
        navigate("/categories");
      } else {
        console.error('Error en la solicitud:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div className="CuestionarioIniciSecion">
      <h1 className="tituloIS">Inicio de sesión</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-box">
          <input
          className="inputIniciosecion"
            type="text"
            placeholder="Correo"
            {...register("email", { required: true })}
          />
      
          {errors.email && <span className="error-message">Este campo es requerido</span>}
        </div>

        <div className="input-box">
          <input
          className="inputIniciosecion"
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
         
          {errors.password && <span className="error-message">Este campo es requerido</span>}
        </div>

        <button type="submit" className="botonis inputIniciosecion">
          Iniciar sesión
        </button>
      </form>
      <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
    </div>
  );
}

export default CuestionarioIniciSecion;