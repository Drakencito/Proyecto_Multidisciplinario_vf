import React from "react";
import './File.css'
function File(props){
    return(
        <div className="file">
            <input  type="file" className="archivo" id={props.id}/>
            <label htmlFor={props.id} className="contenedorIn" >{props.name}</label>
        </div>
    );
}
export default File;