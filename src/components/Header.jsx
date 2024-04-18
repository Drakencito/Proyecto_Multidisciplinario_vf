import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/LOGOEP.jpg'
import '../components/Header.css'
function Header (props){
    return(
        <div className="Header">
            <Link to="/categories">
            <img className="logoHeader" src={logo} alt="logo" />
            </Link>
            <Link to="/solicitud">
            <button>Mandar solicitud</button>
            </Link>
            <Link to="/solicitud">
            <button>mandar solicitud</button>
            </Link>
            <p className="TitlrHeader">{props.title}</p>
            
        </div>
    );
}
export default Header;