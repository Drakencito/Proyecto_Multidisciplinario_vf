import React from "react";
import Header from "../../components/Header";
import "./Events.css"
function Events(){
    return(
        <div className="Events">
            <Header title="Eventos"/>
            <div className="boxEvents">
                <div className="añadir">
                <button className="botonEvents" onClick={cambio} id="botonEvents">Añadir +</button>
                </div>
                
            </div>
            
        </div>
    );
}
export default Events;