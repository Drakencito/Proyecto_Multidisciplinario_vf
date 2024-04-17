import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./cardAñadir.css"

function CardAñadir(props) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        time: '', 
    });
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dateParts = formData.date.split('-'); // Separar la fecha en partes
            const timeParts = formData.time.split(':'); // Separar la hora en partes
            const dateTime = new Date(
                parseInt(dateParts[0]),
                parseInt(dateParts[1]) - 1, // Los meses en JavaScript van de 0 a 11
                parseInt(dateParts[2]),
                parseInt(timeParts[0]),
                parseInt(timeParts[1])
            );

            const dataToSubmit = { ...formData, date: dateTime }; // Actualizar el objeto formData con la fecha y hora combinadas

            if (props.data == null) {
                await axios.post('http://localhost:3000/api/v1/events', dataToSubmit, { withCredentials: true });
                
            } else {
                await axios.put(`http://localhost:3000/api/v1/events${props.data._id}`, dataToSubmit);
            }
            const updatedData = await getdatos();
            setdatadb(updatedData);
            navigate('/events');
        } catch (error) {
            setError('Error al añadir el evento'); 
            //alert('Error al añadir el evento'); 
        }
    };

    return (
        <>
            {props.data == null ? (
                <div className="cardAñadir">
                    <p onClick={props.cerrar}>cerrar</p>
                    <p className="tituloCardAñadir">Añadir</p>
                    <input
                        className="inputCardAñadir"
                        type="text"
                        name="title"
                        placeholder="Title"
                        onChange={handleChange}
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        onChange={handleChange}
                    />
                    <div className="TyH">
                        <input
                            className="inputCardAñadir date"
                            type="date"
                            name="date"
                            onChange={handleChange}
                        />
                        <input 
                            className="inputCardAñadir time" 
                            type="time" 
                            name="time" 
                            onChange={handleChange} 
                        />
                    </div>
                    <button className="butonAñadir" onClick={handleSubmit}>
                        Añadir    
                    </button>
                </div>
            ) : (
                <div className="cardAñadir">
                    <p onClick={props.cerrar}>cerrar</p>
                    <p className="tituloCardAñadir">Evento</p>
                    <input
                        className="inputCardAñadir"
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <textarea className='txtara'
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <div className="TyH">
                        <input
                            className="inputCardAñadir date"
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                        <input 
                            className="inputCardAñadir time" 
                            type="time" 
                            name="time" 
                            value={formData.time} 
                            onChange={handleChange} 
                        />
                    </div>
                    <button className="butonAñadir" onClick={handleSubmit}>
                        añadir
                    </button>
                   
                </div>
            )}
        </>
    );
}

export default CardAñadir;
