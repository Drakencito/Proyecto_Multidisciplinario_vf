import React from "react";
import logo from "../assets/LOGOEP.jpg";
import { Link } from "react-router-dom";
import "../components/Styles.atoms.css";

const NavbarX = () => {
  return (
      <nav className="navbar">
      <Link to="/inicioSesion">
      <img src={logo} className="img" />
      </Link>
      
      <ul className="nav-links">
        <li>
          <Link to="/solicitud" className="reclu">
            {" "}
            Reclutamiento{" "}
          </Link>
        </li>
      </ul>
    </nav>

    
  );
};

export default NavbarX;
