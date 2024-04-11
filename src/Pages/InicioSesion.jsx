import React from "react";
import CuestionarioIniciSecion from '../components/CuestionarioInicioSecion'
import logo from '../assets/logo.jpg'
import '../Pages/InicioSesion.css'
function IniciSesion(){
    return(
        <div className="boxIniciSecion">
            <div className="imgIniciSecion">
                <img src={logo} alt="logo" />
            </div>
            <div className="boxCuestionarioIniciSecion">
             <CuestionarioIniciSecion/>
            </div>
        </div>
        
    );
}
export default IniciSesion;