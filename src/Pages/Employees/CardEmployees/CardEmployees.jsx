import React from "react";
import './CardEmployees.css'
import will from "../../../assets/will.jpg"
function CardEmployees(props){
    return(
        <div className="CardEmployees m-3 col-12 col-sm-12 col-md-6 col col-lg-4 col-xl-3 ">
            
            <img className="imgCardEmployees" src={will} alt="" />
            <div className="Name">
            <p>{props.nombre}</p>
            <p className="edad">{props.edad}</p>
            </div>
            <p>correo: {props.correo}</p>
            <p>Telefono: {props.tell}</p>
            <div className="sangre"><p>Sangre: </p><p className="tipoSangre">{props.sangre}</p></div>
        </div>
    );

}
export default CardEmployees;

