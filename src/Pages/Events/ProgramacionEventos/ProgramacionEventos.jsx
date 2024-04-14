import React from "react";
import basurero from "../../../assets/borrar.png"
import"../ProgramacionEventos/ProgramacionEventos.css"
function ProgramacionEventos(props){
    
    
    return(
        
        <div onClick={()=>props.selected(props.id)} className="ProgramacionEventos">
            
        <p className="pooading">{props.Titulo}</p>
        <p className="pooading">{props.Descripcion}</p>
        <p className="pooading">{props.FechayHora}</p>
        <button className="EliminarButon"><img className="Basurero" src={basurero} /></button>
    </div>
    )
    
}
export default ProgramacionEventos;