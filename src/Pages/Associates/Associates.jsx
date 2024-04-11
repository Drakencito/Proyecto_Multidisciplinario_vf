import React from "react";
import Header from "../../components/Header.jsx";
import CardAssociates from "../Associates/cardAssociates/cardAssociates.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Associates.css'
import will from "../../assets/cfe.jpg"
function Associates(){
    return(
        <div className="Associates">
            <Header title="Asociados" />
            
        <div  class="container mt-5 ">
            <div className="row row-cols-3 row-cols-lg-10 g-4 g-lg-5">
            <div className="CardAssociates m-3 col-12 col-sm-12 col-md-6 col col-lg-4 col-xl-3 ">

            <img className="imgCardAssociates" src={will} alt="" />
            <input className="inputAssociates" type="text" placeholder="Empresa" />
            <input className="inputAssociates" type="text" placeholder="Tipo de asociación" />
            <textarea className="Descripcion" placeholder="Descripcion" cols="30" rows="8"></textarea>
            
            </div>
            <CardAssociates
        empresa="CFE"
        asociasion="Civil"
        descripcion="Asdasda as dasdaasds  asd dsadasdasdas sad as da asdas asd "
        />
        <CardAssociates
        empresa="Acciona"
        asociasion="Civil"
        descripcion="Asdasda as dasdaasds  asd dsadasdasdas sad as da asdas asd "
        />
        
        
            </div>
        </div>
        
        </div>
    );
}
export default Associates;