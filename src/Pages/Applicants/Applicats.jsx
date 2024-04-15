import React from "react";
import will from '../../assets/will.jpg'
import eliminar from '../../assets/borrar.png'
import editar from '../../assets/editar.png'
import '../Applicants/Applicants.css'
function ApplicantsX (props){
    return(
        <div className="ApplicantsX">
            <img className="ImgApplicants" src={will} alt="" />
            <div className="info">
                <div className="Name">
                    <p>{props.name}</p>
                    <p className="eage">{props.eage}</p>
                </div>
                <p className="genero">Genero: {props.gener}</p>
            </div>
            <div className="info">
                <p>Numero: {props.tell}</p>
                <p className="correo">Correo: {props.mail}</p>
            </div>

            <div className="boxBotonAplicants">
                <button className="botonAplicants"><img className="botonAplicants" src={eliminar}  /></button>
                <button className="botonAplicants"><img className="botonAplicants" src={editar}  /></button>
                
            </div>
        </div>
    )
}
export default ApplicantsX;
