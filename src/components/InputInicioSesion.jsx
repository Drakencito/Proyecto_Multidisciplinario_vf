import React from "react";
import '../components/InputIniciSecion.css'

function InputIniciSecion(props){
    return(
        <input
            className="InputIniciSecion"
            type={props.type}
            name={props.nombre}
            placeholder={props.nombre}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

export default InputIniciSecion;


