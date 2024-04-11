import React from "react";
import img2 from "../assets/image2.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";

function Info() {
  return (
    <div className="info">
      <div className="containerInfo">

      <h1 className="tittle">QUIENES SOMOS</h1>
      <p className="text">
        Empresa dedicada al sector eólico y civil que tienen como objetivo desarrollar un equipo de profesionales altamente cualificados y experimentados ofreciendo servicios de alta calidad y eficiencia, incorporar últimas tecnologías y técnicas de mantenimiento.
      </p>

      </div>
     
      <div className="container-img">
        <img src={img2} className="img1"/>
        <div className="imgCont">
        <img src={img4} className="img2"/>
        <img src={img5} className="img2"/>
        </div>
     
      </div>
    </div>
  );
}

export default Info;
