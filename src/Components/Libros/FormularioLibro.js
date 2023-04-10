import React, { useEffect, useState } from 'react'
import {addLibro,updateLibro} from "../../Services/LibroService"
import Cargando from "../Cargando";

const FormularioLibro = (props) => {

  const {libroProp} = props
  const {obtenerLibros} = props
  
  const [loading,setLoading] = useState(false)
  const [errores,setErrores] = useState([])
  const [libro,setLibro] = useState(libroProp)


const guardar = (e)=>{
  e.preventDefault()

  setLoading(true)

  let errArray=[]

  if(!libro.nombre.trim()){
    errArray.push('El nombre es requerido.')
  }

  if(!libro.autor.trim()){
    errArray.push('El autor es requerido.')
  }

  if(!libro.descripcion.trim()){
    errArray.push('La descripción es requerida.')
  }

  if(!libro.editorial.trim()){
    errArray.push('La editorial es requerida.')
  }

  

  if(!libro.idioma.trim()){
    errArray.push('El idioma es requerido.')
  }

  if(isNaN(libro.precio)){
    if(!libro.precio.trim()){
      errArray.push('El precio es requerido.')
    }
  }

  if(!libro.fechaPublicacion.trim()){
    errArray.push('La fecha es requerida.')
  }

  //TODO: revisar porque no actualiza errores
  setErrores(errArray)

  if(errArray.length > 0){
    setLoading(false)
    return
  }
  
  if(libro.id===0){
    let resAdd = guardarLibro(libro)
  }else{
    let resUpdate = updateLibro(libro)
  }

  

  setLibro({
    id:0,
    nombre:'',
    autor:'',
    descripcion:'',
    editorial:'',
    idioma:'',
    precio:'',
    fechaPublicacion:''
  })

  obtenerLibros()

  setLoading(false)

}

const guardarLibro = async(_libro) =>{
  const res = await addLibro(_libro)
  return res
}

const handleChange = (e) => {
  setLibro({
    ...libro,
    [e.target.name]:e.target.value
  })
}

useEffect(()=>{
  libroProp.fechaPublicacion = libroProp.fechaPublicacion.split("T")[0];
  setLibro(libroProp)
},[libroProp])

  return  (<>
                <div className='row'>
                    <div className='col text-center'>
                        <h3>Formulario Libro</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                    </div>
                    <div className='col'>
                      <form className='mt-4' onSubmit={(e)=>guardar(e)}>
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Nombre</label>
                          <div className="col-sm-3 text-left">
                            <input 
                              type="text" 
                              className="form-control " 
                              value={libro.nombre} 
                              onChange={handleChange}
                              name='nombre'/>
                          </div>
                          <label className="col-sm-3 col-form-label">Autor</label>
                          <div className="col-sm-3">
                            <input 
                              type="text" 
                              className="form-control" 
                              value={libro.autor} 
                              onChange={handleChange}
                              name='autor'/>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Descripcion</label>
                          <div className="col-sm-3">
                            <input 
                              type="text" 
                              className="form-control"
                              value={libro.descripcion} 
                              onChange={handleChange}
                              name='descripcion' />
                          </div>
                          <label className="col-sm-3 col-form-label">Editorial</label>
                          <div className="col-sm-3">
                          <input 
                              type="text" 
                              className="form-control"
                              value={libro.editorial} 
                              onChange={handleChange}
                              name='editorial' />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Idioma</label>
                          <div className="col-sm-3">
                          <input 
                              type="text" 
                              className="form-control"
                              value={libro.idioma} 
                              onChange={handleChange}
                              name='idioma' />
                          </div>
                          <label className="col-sm-3 col-form-label">Precio</label>
                          <div className="col-sm-3">
                          <input 
                              type="number" 
                              className="form-control"
                              value={libro.precio} 
                              onChange={handleChange}
                              name='precio' />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Fecha Publicacion</label>
                          <div className="col-sm-3">
                          <input 
                              type="date" 
                              className="form-control"
                              value={libro.fechaPublicacion} 
                              onChange={handleChange}
                              name='fechaPublicacion' />
                          </div>
                          {
                            loading ?
                            (<Cargando />)
                            :
                            (
                            <div className="col-sm-6">
                            <input 
                                type="submit" 
                                className="btn btn-success btn-block" 
                                value={libro.id == 0 ? "Guardar" : "Editar"}
                                />
                            </div>)
                          }
                          
                        </div>
                      </form>
                      {
                        errores.length > 0 &&
                        <div className='alert-danger text-center'>
                          <ul>
                            {
                              errores.map((error)=>(
                                <li key={error}>{error}</li>
                              ))
                            }
                          </ul>
                        </div>
                      }
                    </div>
                    <div className='col-2'>
                    </div>
                </div>
          </>)
}

export default FormularioLibro