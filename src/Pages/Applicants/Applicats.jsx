import React from "react";
import will from '../../assets/will.jpg'
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
        </div>
    )
}
export default ApplicantsX;
