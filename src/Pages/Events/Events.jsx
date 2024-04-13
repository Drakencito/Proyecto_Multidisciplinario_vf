import React from "react";
import Header from "../../components/Header";
import ProgramacionEventos from "./ProgramacionEventos/ProgramacionEventos";
import "./Events.css"
function Events(){
    return(
        <div className="Events">
            <Header title="Eventos"/>
            <div className="boxEvents">
                <div className="añadir">
                <button className="botonEvents"  id="botonEvents">Añadir +</button>
                </div>
                <ProgramacionEventos
                Titulo="Hola"
                Descripcion="Tarea del mes"
                FechayHora="200324"
                />
                
            </div>
            
        </div>
    );
}
export default Events;