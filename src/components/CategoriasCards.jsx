import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import "../components/CategoriasCards.css";
function CategoriasCards() {
  return (
    <div className="CategoriasCards">
      <Link to="/requests">
        <div className="iconos">
          <img src={img1} alt="" className="imgIcon" />
          <p>Solicitudes</p>
        </div>
      </Link>

      <Link to="/employees">
        <div className="iconos">
          <img src={img2} alt="" className="imgIcon" />
          <p>Empleados</p>
        </div>
      </Link>

      <Link to="/associates">
        <div className="iconos">
          <img src={img3} alt="" className="imgIcon" />
          <p>Asociados</p>
        </div>
      </Link>
      
      <Link to="/events">
        <div className="iconos">
          <img src={img4} alt="" className="imgIcon" />
          <p>Eventos</p>
        </div>
      </Link>
    </div>
  );
}
export default CategoriasCards;
