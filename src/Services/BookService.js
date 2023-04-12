import {urlApi} from "../constantes"
import Toast from '../SwalAlert'

export const getBooksService = () => {
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

export const getBookService = (id) => {
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

export const addBookService = (libro) => {
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

export const updateBookService = (libro) => {
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

export const deleteBookService = (id) => {
    return  fetch(urlApi + "Libros?idLibro=" + id,{
                method: 'DELETE',
                headers:{
                'Content-Type': 'application/json'
                }
            })
            .then((res) => res)
            .then((data) => data)
            .catch(error =>{
                Toast.fire({
                            icon: 'error',
                            title: error
                            })
            })
}