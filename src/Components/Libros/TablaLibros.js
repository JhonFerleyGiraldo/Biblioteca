import React from 'react'
import { Link } from 'react-router-dom'

const TablaLibros = ({libros,selectEditBook,deleteData}) => {

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

                                    libros.length === 0
                                    ?
                                    (
                                        <tr className='text-center'>
                                            <td colSpan={6}>
                                                No hay registros para mostrar
                                            </td>
                                        </tr>
                                    )
                                    :
                                    libros.map((item)=>(
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.nombre}</td>
                                                    <td>{item.autor}</td>
                                                    <td>
                                                        <Link className='btn btn-info' to={`/DetalleLibro/${item.id}`}>Detalle</Link>
                                                    </td>
                                                    <td>
                                                        <button className='btn btn-success' onClick={()=>selectEditBook(item)}>Editar</button>
                                                    </td>
                                                    <td>
                                                        <button className='btn btn-danger' onClick={()=>deleteData(item.id)}>Eliminar</button>
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