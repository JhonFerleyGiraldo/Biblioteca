import {urlApi} from "../constantes"
import Toast from '../SwalAlert'

export const getCategoriesService = () => {
    return  fetch(urlApi + "Categorias")
            .then((res) => res.json())
            .then((data) => data)
            .catch(error =>{
                Toast.fire({
                            icon: 'error',
                            title: error
                            })
            })
}

export const getCategoryService = (id) => {
    /*
    return  fetch(urlApi + "Libros/" + id)
            .then((res) => res.json())
            .then((data) => data)
            .catch(error =>{
                Toast.fire({
                            icon: 'error',
                            title: error
                            })
            })
            */
}

export const addCategoryService = (categoria) => {
    return  fetch(urlApi + "Categorias", {
                method: 'POST',
                body: JSON.stringify(categoria),
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

export const updateCategoryService = (categoria) => {
    return  fetch(urlApi + "Categorias", {
                method: 'PUT',
                body: JSON.stringify(categoria),
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

export const deleteCategoryService = (id) => {
    return  fetch(urlApi + "Categorias?idCategoria=" + id,{
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