import React from "react";
import logo from '../assets/LOGOEP.jpg'
import '../components/Header.css'
function Header (props){
    return(
        <div className="Header">
            <img className="logoHeader" src={logo} alt="logo" />
            <p className="TitlrHeader">{props.title}</p>
        </div>
    );
}
export default Header;