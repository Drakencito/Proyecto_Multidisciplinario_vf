import React from "react";
import Header from "../../components/Header";
import ProgramacionEventos from "./ProgramacionEventos/ProgramacionEventos";
import CardAñadir from "./cardAñadir/cardAñadir";
import "./Events.css"
function Events(){

    const handleSwitchSize = () => {
        const boxEvents = document.querySelector('.boxEvents');

        boxEvents.classList.toggle('fullWidth')
        boxEvents.classList.toggle('lessWidth');
    }

    return(
        <div className="Events">
            <Header title="Eventos"/>
            <div className="loool">
                
           
            <div className="boxEvents">
                <div className="añadir">
                <button className="botonEvents" onClick={handleSwitchSize}  >Añadir +</button>
                </div>
                <div className="Scrol">
                <ProgramacionEventos
                Titulo="Hola"
                Descripcion="Tarea del mes"
                FechayHora="200324"
                />
                <ProgramacionEventos
                Titulo="Hola"
                Descripcion="Tarea del mes"
                FechayHora="200324"
                />
                <ProgramacionEventos
                Titulo="Hola"
                Descripcion="Tarea del mes"
                FechayHora="200324"
                />
                <ProgramacionEventos
                Titulo="Hola"
                Descripcion="Tarea del mes"
                FechayHora="200324"
                />
                <ProgramacionEventos
                Titulo="Hola"
                Descripcion="Tarea del mes"
                FechayHora="200324"
                />
                <ProgramacionEventos
                Titulo="Hola"
                Descripcion="Tarea del mes"
                FechayHora="200324"
                />
                <ProgramacionEventos
                Titulo="Hola"
                Descripcion="Tarea del mes"
                FechayHora="200324"
                />
                <ProgramacionEventos
                Titulo="Hola"
                Descripcion="Tarea del mes"
                FechayHora="200324"
                />
                <ProgramacionEventos
                Titulo="Hola"
                Descripcion="Tarea del mes"
                FechayHora="200324"
                />

                </div>
                
                
            </div>
            <CardAñadir/>

            </div>
           
            
            
        </div>
    );
}
export default Events;