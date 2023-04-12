import React, { useState } from 'react'
import Cargando from '../../Components/Cargando'

const FormularioCategoria = ({categoriaProp,setCategoriaProp,createData,updateData}) => {
  
    const [loading, setLoading] = useState(false)
    const [errores,setErrores] = useState([])

    const guardar = (e) => {
        e.preventDefault()

        setLoading(true)

        let errArray = []

        if(!categoriaProp.nombre.trim()){
            errArray.push('El nombre es requerido.')
        }

        setErrores(errArray)

        if(errArray.length > 0){
            setLoading(false)
            return
        }

        if(categoriaProp.id === 0){
            createData(categoriaProp)
        }
        else{
            updateData(categoriaProp)
        }

        setCategoriaProp({
            id:0,
            nombre:''
        })

        setLoading(false)

    }


    const handleChange = (e) => {
        setCategoriaProp({
            ...categoriaProp,
            [e.target.name]:e.target.value
        })
    }

    return (
    <>
    <div className='row'>
                    <div className='col text-center'>
                        <h3>Formulario Categoria</h3>
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
                              value={categoriaProp.nombre} 
                              onChange={handleChange}
                              name='nombre'/>
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
                                value={categoriaProp.id == 0 ? "Guardar" : "Editar"}
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
    </>
  )
}

export default FormularioCategoria