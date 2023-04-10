import React,{useState, useEffect, useCallback} from 'react'
import { useParams,useNavigate  } from 'react-router-dom'
import {getLibro} from '../../Services/LibroService'

const DetalleLibro = () => {

    const navigate = useNavigate();
 
    const {idLibro} = useParams()
    const [libro,setLibro] = useState({
        id:0,
        nombre:'',
        autor:'',
        descripcion:'',
        editorial:'',
        idioma:'',
        precio:'',
        fechaPublicacion:''
    })

    const obtenerLibro = useCallback(async() =>{
        const res = await getLibro(idLibro)
        setLibro(res)
        console.log(res)
    },[])

    useEffect(()=>{
        obtenerLibro()
    },[libro])


    const volverAtras = () => {
        console.log('atras')
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
                    <label className="col-form-label">{libro.fechaPublicacion}</label>
                </div>
                <div className='col-2'>
                    <button className='btn btn-outline-warning' onClick={()=>volverAtras()}>Regresar</button>
                </div>
            </div>
        </div>
    )
}

export default DetalleLibro