import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputIniciSecion from "../components/InputInicioSesion";
import { Link } from "react-router-dom";
import "../components/CuestionarioInicioSecion.css";

function CuestionarioIniciSecion() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const navigate = useNavigate();

  const handleIniciarSesion = () => {
    // Validar la información
    if (!usuario || !contrasena) {
      alert("Debes completar todos los campos");
      return;
    }

    // Simular la autenticación (reemplazar con API real)
    if (usuario === "usuario" && contrasena === "contrasena") {
      // Redirigir a la página de categorías
      navigate("/categories");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="CuestionarioIniciSecion">
      <h1 className="tituloIS">Inicio de sesión</h1>
      <InputIniciSecion
        type="text"
        nombre="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <InputIniciSecion
        type="password"
        nombre="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
      />
      <button className="botonis" onClick={handleIniciarSesion}>
        Iniciar sesión 
      </button>
      <Link to="/register">
        <p>¿No tienes cuenta? Crea una</p>
      </Link>
    </div>
  );
}

export default CuestionarioIniciSecion;
