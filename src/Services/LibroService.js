import {urlApi} from "../constantes"
import Toast from '../SwalAlert'

export const getLibros = () => {
    return  fetch(urlApi + "Libros")
            .then((res) => res.json())
            .then((data) => data)
            .catch(error =>{
                Toast.fire({
                            icon: 'error',
                            title: error
                            })
            })
}

export const getLibro = (id) => {
    return  fetch(urlApi + "Libros/" + id)
            .then((res) => res.json())
            .then((data) => data)
            .catch(error =>{
                Toast.fire({
                            icon: 'error',
                            title: error
                            })
            })
}

export const addLibro = (libro) => {
    return  fetch(urlApi + "Libros", {
                method: 'POST',
                body: JSON.stringify(libro),
                headers:{
                'Content-Type': 'application/json'
                }
            }).then((res) => {
                if(res.status === 200){
                    Toast.fire({
                        icon: 'success',
                        title: 'Registro guardado correctamente!'
                        })
                }else{
                    Toast.fire({
                        icon: 'error',
                        title: 'Error al intentar guardar el registro.'
                        })
                }

                return res.json()
            })
            .then((response) =>  response)
            .catch(error => Toast.fire({
                            icon: 'error',
                            title: error
                            }))
            
}

export const updateLibro = (libro) => {
    return  fetch(urlApi + "Libros", {
                method: 'PUT',
                body: JSON.stringify(libro),
                headers:{
                'Content-Type': 'application/json'
                }
            }).then((res) => {
                if(res.status === 200){
                    Toast.fire({
                        icon: 'success',
                        title: 'Registro guardado correctamente!'
                        })
                }else{
                    Toast.fire({
                        icon: 'error',
                        title: 'Error al intentar guardar el registro.'
                        })
                }

                return res.json()
            })
            .then((response) =>  response)
            .catch(error => Toast.fire({
                            icon: 'error',
                            title: error
                            }))
            
}

export const deleteLibros = (id) => {
    return  fetch(urlApi + "Libros?idLibro=" + id,{
                method: 'DELETE',
                headers:{
                'Content-Type': 'application/json'
                }
            })
            .then((res) => console.log(res))
            .then((data) => console.log(data))
            .catch(error =>{
                Toast.fire({
                            icon: 'error',
                            title: error
                            })
            })
}