import React, { useState } from "react";
import InfoContainer from "../components/InfoContainer";
import NavbarX from "../components/Navbar";
import reclu from "../assets/reclu.jpg";
import CuestionarioX from "../components/Cuestionario";
import "../Pages/Styles.css";

function Solicitud() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [institution, setInstitution] = useState("");
  const [skills, setSkills] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [cv, setCv] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="bg-white">
      <NavbarX />
      <img src={reclu} className="reclu-img"/>
      
      <InfoContainer/>
      
      <CuestionarioX/>
      
    </div>
  );
}

export default Solicitud;
