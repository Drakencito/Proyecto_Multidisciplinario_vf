import React from "react";
import Header from "../../components/Header";
import ApplicantsX from "./Applicats";
import "../Applicants/Requests.css";

function RequestsX() {
  return (
    <div className="Solicitudes">
      <div className="Absolute">
        <Header title="Solicitudes" />
        <div className="containerSerch">
          <input className="Serch" type="text" placeholder="Buscar" />
        </div>
      </div>
      <ApplicantsX
        name="Juan peres peres"
        eage="51"
        gener="Masculino"
        tell="9671800842"
        mail="nakjsndjkagmail.com"
      />
    </div>
  );
}

export default RequestsX;
