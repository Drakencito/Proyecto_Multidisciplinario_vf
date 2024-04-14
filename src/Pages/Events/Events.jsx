import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import ProgramacionEventos from "./ProgramacionEventos/ProgramacionEventos";
import CardAñadir from "./cardAñadir/cardAñadir";
import "./Events.css"
function Events(){
    const [showadd,setshowadd]=useState(false)
    const [datdb,setdatadb]=useState([])
    const [datashow,setdatshow]=useState(null)

    function searchmydata(id){
    
       const result = datdb.find(x => x.id == id);
       handleSwitchSize()
       setdatshow(result)
       
    }
    function getdatos(){
        //peticion al api rest

        const data=[{id:1,titulo:"Hola",descripcion:"Tarea del mes",fechayHora:"200324",
        
    },
    {id:2,titulo:"Hola",descripcion:"Tarea del mes",fechayHora:"200324",
        
},{id:3,titulo:"Hola",descripcion:"Tarea del mes",fechayHora:"200324",
        
}
,{id:4,titulo:"Hola",descripcion:"Tarea del mes",fechayHora:"200324",
        
},{id:5,titulo:"Hola",descripcion:"Tarea del mes",fechayHora:"200324",
        
},{id:6,titulo:"Hola",descripcion:"Tarea del mes",fechayHora:"200324",
        
},{id:7,titulo:"Hola",descripcion:"Tarea del mes",fechayHora:"200324",
        
},{id:8,titulo:"Hola",descripcion:"Tarea del mes",fechayHora:"200324",
        
}
,{id:9,titulo:"Hola",descripcion:"Tarea del mes",fechayHora:"200324",
        
}]
return data
    }


    useEffect(()=>{
      setdatadb(getdatos())
      

    },[])


    const handleSwitchSize = () => {
        const boxEvents = document.querySelector('.boxEvents');

        
       
       setshowadd(x=>!x)
       if(showadd==false){
        setdatshow(null)
       }
        
        boxEvents.classList.toggle('fullWidth')
        boxEvents.classList.toggle('lessWidth');
    }


    return(
        <div className="Events">
            <Header title="Eventos"/>
            <div className="loool">
                
           
            <div className="boxEvents">
                <div className="añadir">
                <button className="botonEvents" onClick={handleSwitchSize}  >Añadir +</button>
                </div>
                <div className="Scrol">
                {datdb.length!=0?datdb.map(x=> 
                <ProgramacionEventos
                key={x.id}
                selected={searchmydata}
                 id={x.id}
                  Titulo={x.titulo}
                  Descripcion={x.descripcion}
                  FechayHora={x.fechayHora}
                  />
                
                
                ):<></>}

                </div>
                
                
            </div>
            {showadd?<CardAñadir
            data={datashow}
             cerrar={handleSwitchSize}
              className="cardAñadir"/>:<></>}

           

            </div>
           
            
            
        </div>
    );
}
export default Events;