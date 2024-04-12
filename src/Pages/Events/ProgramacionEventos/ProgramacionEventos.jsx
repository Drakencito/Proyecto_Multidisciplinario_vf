import React from "react";
import"../ProgramacionEventos/ProgramacionEventos.css"
function ProgramacionEventos(props){
    return(
        <div className="ProgramacionEventos">
        <p className="pooading">{props.Titulo}</p>
        <p className="pooading">{props.Descripcion}</p>
        <p className="pooading">{props.FechayHora}</p>
    </div>
    )
    
}
export default ProgramacionEventos;