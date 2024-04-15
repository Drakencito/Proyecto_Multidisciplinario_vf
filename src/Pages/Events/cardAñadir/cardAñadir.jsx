import React, { useState } from 'react';
import axios from 'axios';

function CardAñadir(props) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (props.data == null) {
                axios.post('http://localhost:3000/api/v1/events', formData, { withCredentials: true });
            } else {
                await axios.put(`http://localhost:3000/api/v1/events${props.data._id}`, formData);
            }
            // Aquí podrías redirigir a otra página o mostrar un mensaje de éxito
        } catch (error) {
            // Manejar errores de creación o edición de eventos
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
                        <input className="inputCardAñadir time" type="time" />
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
                    <textarea
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
                        <input className="inputCardAñadir time" type="time" />
                    </div>
                    <button className="butonAñadir" onClick={handleSubmit}>
                        Editar
                    </button>
                </div>
            )}
        </>
    );
}

export default CardAñadir;

