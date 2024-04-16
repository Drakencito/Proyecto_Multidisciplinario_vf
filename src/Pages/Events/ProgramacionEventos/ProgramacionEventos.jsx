import axios from 'axios';
import React, { useState } from "react";
import basurero from "../../../assets/borrar.png";
import "../ProgramacionEventos/ProgramacionEventos.css";

function ProgramacionEventos(props) {
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        title: props.Titulo,
        description: props.Descripcion,
        date: props.FechayHora.split(',')[0],
        time: props.FechayHora.split(',')[1].trim(), 
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:3000/api/v1/events/${props.id}`, formData, { withCredentials: true });
            props.onUpdate();
            setEditMode(false);
        } catch (error) {
            console.error('Error al actualizar el evento:', error);
        }
    };

    const handleDelete = () => {
        props.onDelete(props.id);
    };

    return (
        <div className="ProgramacionEventos">
            {editMode ? (
                <>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                    <textarea name="description" value={formData.description} onChange={handleChange} />
                    <input type="date" name="date" value={formData.date} onChange={handleChange} />
                    <input type="time" name="time" value={formData.time} onChange={handleChange} />
                    <button onClick={handleUpdate}>Guardar</button>
                </>
            ) : (
                <>
                    <p className="pooading">{props.Titulo}</p>
                    <p className="pooading">{props.Descripcion}</p>
                    <p className="pooading">{props.FechayHora}</p>
                    <button className="EliminarButon" onClick={handleDelete}>
                        <img className="Basurero" src={basurero} alt="Eliminar" />
                    </button>
                    <button className="AñadirButon" onClick={handleEdit}>
                        Editar
                    </button>
                </>
            )}
        </div>
    );
}

export default ProgramacionEventos;

