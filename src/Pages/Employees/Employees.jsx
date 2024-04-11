import React from "react";
import Header from "../../components/Header";
import CardEmployees from "./CardEmployees/CardEmployees";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Employees.css'
function Employees(){
    return(
        <div className="Employees">
            <Header title="Empleado" />
            <div className="containerSerch">
          <input className="Serch" type="text" placeholder="Buscar" />
          
        </div>
        <div  class="container mt-5 ">
            <div className="row row-cols-3 row-cols-lg-10 g-4 g-lg-5">
            <CardEmployees
        nombre="Will Smith"
        edad="42"
        correo="willsmith@gmail.com"
        tell="967 1800842"
        sangre="O+"
        />
        
        <CardEmployees
        nombre="Will Smith"
        edad="42"
        correo="willsmith@gmail.com"
        tell="967 1800842"
        sangre="O+"
        />
        <CardEmployees
        nombre="Will Smith"
        edad="42"
        correo="willsmith@gmail.com"
        tell="967 1800842"
        sangre="O+"
        />
         <CardEmployees
        nombre="Will Smith"
        edad="42"
        correo="willsmith@gmail.com"
        tell="967 1800842"
        sangre="O+"
        />
         <CardEmployees
        nombre="Will Smith"
        edad="42"
        correo="willsmith@gmail.com"
        tell="967 1800842"
        sangre="O+"
        />
         <CardEmployees
        nombre="Will Smith"
        edad="42"
        correo="willsmith@gmail.com"
        tell="967 1800842"
        sangre="O+"
        />
         <CardEmployees
        nombre="Will Smith"
        edad="42"
        correo="willsmith@gmail.com"
        tell="967 1800842"
        sangre="O+"
        />
          <CardEmployees
        nombre="Will Smith"
        edad="42"
        correo="willsmith@gmail.com"
        tell="967 1800842"
        sangre="O+"
        />
          <CardEmployees
        nombre="Will Smith"
        edad="42"
        correo="willsmith@gmail.com"
        tell="967 1800842"
        sangre="O+"
        />
          <CardEmployees
        nombre="Will Smith"
        edad="42"
        correo="willsmith@gmail.com"
        tell="967 1800842"
        sangre="O+"
        />
            </div>
        </div>
        
        </div>
    );
}
export default Employees;