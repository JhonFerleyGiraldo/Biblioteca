import React from 'react'
import {ventanaEliminar} from '../../SwalAlert'
import {deleteLibros} from '../../Services/LibroService'
import {Toast} from '../../SwalAlert'
import { Link } from 'react-router-dom'

const TablaLibros = (props) => {

    const {libros} = props
    const {seleccionarElemento} = props



    const seleccionarItem = (item) => {
        seleccionarElemento(item)
    }

    const eliminarItem = (id) => {

        
        ventanaEliminar(id).then(response => {
            console.log(response)
            if(response){
                deleteLibros(id)
                Toast.fire({
                    icon: 'success',
                    title: 'Registro eliminado correctamente!'
                    })
            }
        })    


    }



    return    (<>
                <div className='row'>
                    <div className='col text-center'>
                        <h3>Listado Libros</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                    </div>
                    <div className='col'>
                        <table className="table mt-4">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Autor</th>
                                    <th scope="col">Detalle</th>
                                    <th scope="col">Editar</th>
                                    <th scope="col">Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                    libros !== null &&
                                    libros.map((item)=>(
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.nombre}</td>
                                                    <td>{item.autor}</td>
                                                    <td>
                                                        <Link className='btn btn-info' to={`/DetalleLibro/${item.id}`}>Detalle</Link>
                                                    </td>
                                                    <td>
                                                        <button className='btn btn-success' onClick={()=>seleccionarItem(item)}>Editar</button>
                                                    </td>
                                                    <td>
                                                        <button className='btn btn-danger' onClick={()=>eliminarItem(item.id)}>Eliminar</button>
                                                    </td>
                                                </tr>
                                                ))  
                                    
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='col-2'>
                    </div>
                </div>            
            </>)
}

export default TablaLibros