import React, { useEffect, useState } from "react";
import axios from 'axios'; 
import Header from "../../components/Header";
import ProgramacionEventos from "./ProgramacionEventos/ProgramacionEventos";
import CardAñadir from "./cardAñadir/cardAñadir";
import "./Events.css";

function Events() {
    const [showadd, setshowadd] = useState(false);
    const [datdb, setdatadb] = useState([]);
    const [datashow, setdatashow] = useState(null);

    async function getdatos() {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/events', { withCredentials: true });
            return response.data.map(evento => ({
                id: evento._id,
                titulo: evento.title,
                descripcion: evento.description,
                fechayHora: new Date(evento.date).toLocaleString('es-ES', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })
            }));
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            return [];
        }
    }

    const deleteEvent = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/v1/events/${id}`, { withCredentials: true });
            setdatadb(datadb.filter(event => event.id !== id));
        } catch (error) {
            console.error('Error al eliminar el evento:', error);
        }
    };

    const handleUpdateEvent = async () => {
        try {
            const updatedData = await getdatos();
            setdatadb(updatedData);
            setshowadd(false);
        } catch (error) {
            console.error('Error al actualizar el evento:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await getdatos();
            setdatadb(data);
        };

        fetchData();
    }, []);

    const handleSwitchSize = () => {
        const boxEvents = document.querySelector('.boxEvents');

        setshowadd(x => !x);
        if (showadd === false) {
            setdatashow(null);
        }

        boxEvents.classList.toggle('fullWidth');
        boxEvents.classList.toggle('lessWidth');
    };

    return (
        <div className="Events">
            <Header title="Eventos" />
            <div className="loool">
                <div className="boxEvents">
                    <div className="añadir"> 
                        <div className="cabecera1">Titulo</div>
                        <div className="cabecera2">Descripcion</div>
                        <div className="cabecera3">Fecha y hora</div>
                        <button className="botonEvents" onClick={handleSwitchSize}>
                            Añadir +
                        </button>
                       
                    </div>
                    <div className="Scrol">
                        {datdb.length !== 0
                            ? datdb.map((x) => (
                                <ProgramacionEventos
                                    key={x.id}
                                    id={x.id}
                                    Titulo={x.titulo}
                                    Descripcion={x.descripcion}
                                    FechayHora={x.fechayHora}
                                    onDelete={() => deleteEvent(x.id)} 
                                    onUpdate={handleUpdateEvent} // Pasar la función onUpdate
                                />
                            ))
                            : <></>}
                    </div>
                </div>
                {showadd ? (
                    <CardAñadir
                        data={datashow}
                        cerrar={handleSwitchSize}
                        className="cardAñadir"
                    />
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default Events;
