import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import '../Register/Register.css'
//hola jou
function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
       
        navigate("/inicioSesion");
      } else {
       
        console.error('Error en la solicitud:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box">
            <input
              type="text"
              {...register("name", { required: true })}
            />
            <label>Nombre</label>
            {errors.name && <span className="error-message">Este campo es requerido</span>}
          </div>

          <div className="input-box">
            <input
              type="text"
              {...register("gender", { required: true })}
            />
            <label>Genero</label>
            {errors.gender && <span className="error-message">Este campo es requerido</span>}
          </div>

          <div className="input-box">
            <input
              type="text"
              {...register("age", { required: true })}
            />
            <label>Edad</label>
            {errors.age && <span className="error-message">Este campo es requerido</span>}
          </div>

          <div className="input-box">
            <input
              type="email"
              {...register("email", { required: true })}
            />
            <label>Email</label>
            {errors.email && <span className="error-message">Este campo es requerido</span>}
          </div>

          <div class="input-box">
            <input type="password" {...register("password", { required: true })} />
            <label>Contraseña</label>
            {errors.password && <span className="error-message">Este campo es requerido</span>}
          </div>
          
         
          <button type="submit" className="btn">
            Register
          </button>
        </form>
        <div className="login-register">
          <p>
            Already have an account?{" "}
            <a href="#" className="register-link" onClick={() => navigate("/inicioSesion")}>
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
