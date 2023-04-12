import { useEffect, useState } from "react";
import Cargando from "../../Components/Cargando";
import { addCategoryService, getCategoriesService, updateCategoryService,deleteCategoryService } from "../../Services/CategoryService";
import TablaCategorias from "../../Components/Categorias/TablaCategorias";
import FormularioCategoria from "../../Components/Categorias/FormularioCategoria";
import { ventanaEliminar } from "../../SwalAlert";
import Toast from '../../SwalAlert'

const Categorias = () => {


    const [categorias,setcategorias] = useState(null)
    const [categoria,setCategoria] = useState({
        id:0,
        nombre:''
    })

    useEffect(()=>{
        getCategories()
    },[])

    
    const getCategories = () =>{
        getCategoriesService()
            .then((res)=>{  
                setcategorias(res)
        }) 
    }


    const createCategory = (data) => {
        addCategoryService(data)
        .then((res)=>{
            setcategorias([...categorias,res])
        })
    }
    
    const updateCategory = (data) => {
        updateCategoryService(data)
        .then((res)=>{
            let newData = categorias.map((x)=>(x.id===data.id ? data : x))
            setcategorias(newData)
        })
    }

    const deleteCategory = (categoryId) => {
        ventanaEliminar(categoryId)
        .then((response) =>{
            if(response){
                deleteCategoryService(categoryId)
                .then((res)=>{
                    let newData = categorias.filter((x)=>x.id !== categoryId)
                    setcategorias(newData)
                    Toast.fire({
                        icon: 'success',
                        title: 'Registro eliminado correctamente!'
                    })
                })
            }
        })
        
    }

    return (<>
                <FormularioCategoria
                    categoriaProp={categoria} 
                    setCategoriaProp={setCategoria}
                    createData={createCategory} 
                    updateData={updateCategory}/>

                {
                    categorias === null ?
                    (<Cargando/>)
                    :
                    <TablaCategorias 
                        categorias={categorias} 
                        selectEditCategory={setCategoria}  
                        deleteData={deleteCategory}
                      />
                }
            </>)
}

export default Categorias;