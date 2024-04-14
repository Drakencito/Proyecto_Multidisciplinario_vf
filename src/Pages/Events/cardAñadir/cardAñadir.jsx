import React from "react";
import './cardAñadir.css'

function CardAñadir(props){
    return (<>

       {props.data==null? <div className="cardAñadir">
            <p onClick={props.cerrar}>cerrar</p>
            <p className="tituloCardAñadir">Añadir</p>
            <input className="inputCardAñadir" type="text" />
            <textarea/>
            <div className="TyH">
            <input className="inputCardAñadir date" type="date" />
            <input className="inputCardAñadir time" type="time" />
            </div>
            <button className=" butonAñadir">Añadir</button>
            

        </div>:<div className="cardAñadir">
        <p onClick={props.cerrar}>cerrar</p>
            <p className="tituloCardAñadir">Evento</p>
            <input className="inputCardAñadir" type="text" value={props.data.titulo} />
            <textarea value={props.data.descripcion}/>
            <div className="TyH">
            <input className="inputCardAñadir date" value={new Date(props.data.fechayHora)}  type="date" />
            <input className="inputCardAñadir time" value={new Date(props.data.fechayHora)} type="time" />
            <button className=" butonAñadir">Editar</button>
            </div>
            </div>}
    
    
    
    </>
       
    );
}
export default CardAñadir;
