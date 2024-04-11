import React from "react";
import fondo from "../assets/fondo2.png";
import '../components/Styles.atoms.css'

function ImgX() {
  return (
    <div>
      <img src={fondo} className="fondo" />
    </div>
  );
}

export default ImgX;
