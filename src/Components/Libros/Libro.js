import React from 'react'
import {useNavigate} from 'react-router-dom'

const Libro = ({libro}) => {

    const navigate = useNavigate();

    const volverAtras = () => {
        navigate(-1)
    }

    return (
        <div>
            <div className='row'>
                <div className='col text-center mt-4'>
                    <h4>Detalle del libro <b>{libro.nombre}</b></h4>
                </div>
            </div>
            <div className="form-group row">
                <div className='col-2'>
                    <label className="col-form-label float-right">Id :</label>
                </div>
                <div className='col-2'>
                    <label className="col-form-label">{libro.id}</label>
                </div>
                <div className='col-2'>
                    <label className="col-form-label float-right">Nombre :</label>
                </div>
                <div className='col-2'>
                    <label className="col-form-label">{libro.nombre}</label>
                </div>
                <div className='col-2'>
                    <label className="col-form-label float-right">Descripcion :</label>
                </div>
                <div className='col-2'>
                    <label className="col-form-label">{libro.descripcion}</label>
                </div>
            </div>
            <div className="form-group row">
                <div className='col-2'>
                    <label className="col-form-label float-right">Editorial :</label>
                </div>
                <div className='col-2'>
                    <label className="col-form-label">{libro.editorial}</label>
                </div>
                <div className='col-2'>
                    <label className="col-form-label float-right">Idioma :</label>
                </div>
                <div className='col-2'>
                    <label className="col-form-label">{libro.idioma}</label>
                </div>
                <div className='col-2'>
                    <label className="col-form-label float-right">Precio :</label>
                </div>
                <div className='col-2'>
                    <label className="col-form-label">{libro.precio}</label>
                </div>
            </div>
            <div className="form-group row">
                <div className='col-2'>
                    <label className="col-form-label float-right">Fecha de publicación :</label>
                </div>
                <div className='col-2'>
                    <label className="col-form-label">{libro.fechaPublicacion.split("T")[0]}</label>
                </div>
                <div className='col-2'>
                    <button className='btn btn-outline-warning' onClick={()=>volverAtras()}>Regresar</button>
                </div>
            </div>
        </div>
  )
}

export default Libro