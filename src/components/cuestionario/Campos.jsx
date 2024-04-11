import React from "react";
import './Campos.css'
function CamposX(props){
    return(
       
            <input className="campos" type={props.type} placeholder={props.Info} />
        
    );
}
export default CamposX;