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
        descripcion="La Comisión Federal de Electricidad (CFE) es una empresa pública de carácter social que provee energía eléctrica, servicio fundamental para el desarrollo de una nación. Es una empresa productiva del Estado, propiedad exclusiva del gobierno federal, con personalidad jurídica y patrimonio propio. Goza de autonomía técnica, operativa y de gestión conforme a lo dispuesto en la Ley de la Comisión Federal de Electricidad. "
        />
        <CardAssociates
        empresa="Acciona"
        asociasion="Energía Eólica"
        descripcion="ACCIONA es un grupo global de desarrollo y gestión de soluciones sostenibles de infraestructuras, especialmente de energía renovable. Su actividad cubre toda la cadena de valor de diseño, construcción, operación y mantenimiento.  "
        />
        
        
            </div>
        </div>
        
        </div>
    );
}
export default Associates;