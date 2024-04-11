import React from "react";
import image7 from "../assets/image7.jpg";
import './InfoContainer.css'
function InfoContainer(){
    return(
        <div className="InfoContainer">
            <div className="info-1">
                <div className="BoxInfo">
                <h2 className="title">
          ¡Únete a nuestro equipo y construyamos juntos el futuro!
        </h2>
        <p className="info">
          ¿Eres un apasionado de tu trabajo y buscas un lugar donde crecer
          profesionalmente?
        </p>
        <p className="info">
          En Eolic Power, creemos que el talento es la clave del éxito. 
          
        </p>
        <p className="info">
        Por eso, buscamos personas como tú, con talento, compromiso y
          ganas de formar parte de una empresa en constante crecimiento.
        </p>
                </div>
        
        <img src={image7} className="img7"/>
      </div>
        </div>
    );
}
export default InfoContainer;