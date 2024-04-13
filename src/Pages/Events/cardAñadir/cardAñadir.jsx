import React from "react";
import './cardAñadir.css'

function CardAñadir(){
    return (
        <div className="cardAñadir">
            <p className="tituloCardAñadir">Añadir</p>
            <input className="inputCardAñadir" type="text" />
            <textarea/>
            <div className="TyH">
            <input className="inputCardAñadir date" type="date" />
            <input className="inputCardAñadir time" type="time" />
            </div>
            <button className=" butonAñadir">Añadir</button>
            

        </div>
    );
}
export default CardAñadir;
