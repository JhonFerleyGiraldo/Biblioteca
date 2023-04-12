import React, { useState } from 'react'
import Cargando from "../Cargando";

const FormularioLibro = ({libroProp,setLibroProp,createData,updateData,categorias}) => {

  const [loading,setLoading] = useState(false)
  const [errores,setErrores] = useState([])

  const guardar = async(e)=>{
    e.preventDefault()

    setLoading(true)

    let errArray=[]

    if(!libroProp.nombre.trim()){
      errArray.push('El nombre es requerido.')
    }

    if(!libroProp.autor.trim()){
      errArray.push('El autor es requerido.')
    }

    if(!libroProp.descripcion.trim()){
      errArray.push('La descripción es requerida.')
    }

    if(!libroProp.editorial.trim()){
      errArray.push('La editorial es requerida.')
    }

    

    if(!libroProp.idioma.trim()){
      errArray.push('El idioma es requerido.')
    }

    if(isNaN(libroProp.precio)){
      if(!libroProp.precio.trim()){
        errArray.push('El precio es requerido.')
      }
    }

    if(!libroProp.fechaPublicacion.trim()){
      errArray.push('La fecha es requerida.')
    }

    //TODO: revisar porque no actualiza errores
    setErrores(errArray)

    if(errArray.length > 0){
      setLoading(false)
      return
    }
    
    if(libroProp.id===0){
      createData(libroProp)
      console.log('Guardado')
    }else{
      updateData(libroProp)
      console.log('Editado')
    }

    setLibroProp({
      id:0,
      nombre:'',
      autor:'',
      descripcion:'',
      editorial:'',
      idioma:'',
      precio:0,
      fechaPublicacion:'',
      categoriaId:0
    })

    setLoading(false)

  }

  const handleChange = (e) => {
    setLibroProp({
      ...libroProp,
      [e.target.name]:e.target.value
    })
  }

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
                              value={libroProp.nombre} 
                              onChange={handleChange}
                              name='nombre'/>
                          </div>
                          <label className="col-sm-3 col-form-label">Autor</label>
                          <div className="col-sm-3">
                            <input 
                              type="text" 
                              className="form-control" 
                              value={libroProp.autor} 
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
                              value={libroProp.descripcion} 
                              onChange={handleChange}
                              name='descripcion' />
                          </div>
                          <label className="col-sm-3 col-form-label">Editorial</label>
                          <div className="col-sm-3">
                          <input 
                              type="text" 
                              className="form-control"
                              value={libroProp.editorial} 
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
                              value={libroProp.idioma} 
                              onChange={handleChange}
                              name='idioma' />
                          </div>
                          <label className="col-sm-3 col-form-label">Precio</label>
                          <div className="col-sm-3">
                          <input 
                              type="number" 
                              className="form-control"
                              value={libroProp.precio} 
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
                              value={libroProp.fechaPublicacion.split("T")[0]} 
                              onChange={handleChange}
                              name='fechaPublicacion' />
                          </div>
                          <label className="col-sm-3 col-form-label">Categoria</label>
                          <div className="col-sm-3">
                          <select value={libroProp.categoriaId} className="form-control" name="categoriaId" onChange={handleChange}>
                            <option value="0">--Seleccione--</option>
                            {
                              categorias &&
                              categorias.map((item)=>(
                                <option 
                                  key={item.id} 
                                  value={item.id}>
                                  {item.nombre}
                                </option>)
                              )
                            }
                          </select>
                          </div>
                        </div>
                        <div className="form-group row">
                        {
                            loading ?
                            (<Cargando />)
                            :
                            (
                            <div className="col-sm-6">
                            <input 
                                type="submit" 
                                className="btn btn-success btn-block" 
                                value={libroProp.id == 0 ? "Guardar" : "Editar"}
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