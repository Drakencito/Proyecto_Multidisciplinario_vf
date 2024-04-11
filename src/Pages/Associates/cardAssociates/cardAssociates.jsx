import React from "react";
import '../cardAssociates/cardAssociates.css'
import will from "../../../assets/cfe.jpg"
function CardAssociates(props){
    return(
        <div className="CardAssociates m-3 col-12 col-sm-12 col-md-6 col col-lg-4 col-xl-3 ">
            
            <img className="imgCardAssociates" src={will} alt="" />
            <div className="Name">
            <p>{props.empresa}</p>
            </div>
            <p>{props.asociasion}</p>
            <p>{props.descripcion}</p>
        </div>
    );

}
export default CardAssociates;