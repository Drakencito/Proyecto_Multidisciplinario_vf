import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Form.css"; // Importa tu archivo CSS aquí

export function SignupFormDemo() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/applications",
        data,
        { withCredentials: true }
      );
      console.log("Response:", response.data);
      console.log("Form submitted");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Forma parte de nuestro equipo!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Nombre completo</label>
          <input {...register("name", { required: true })} />
          {errors.name && <span>Este campo es obligatorio</span>}
        </div>

        <div className="form-group">
          <label>Carrera</label>
          <input {...register("career", { required: true })} />
          {errors.career && <span>Este campo es obligatorio</span>}
        </div>

        <div className="form-group">
          <label>Posición</label>
          <input {...register("position", { required: true })} />
          {errors.position && <span>Este campo es obligatorio</span>}
        </div>

        <div className="form-group">
          <label>Descripción</label>
          <input {...register("description", { required: true })} />
          {errors.description && <span>Este campo es obligatorio</span>}
        </div>

        <button type="submit">Añadir</button>
      </form>
    </div>
  );
}
