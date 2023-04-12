import { useEffect, useState } from "react";
import Cargando from "../../Components/Cargando";
import { getCategoriesService } from "../../Services/CategoryService";
import TablaCategorias from "../../Components/Categorias/TablaCategorias";

const Categorias = () => {

    const [categorias,setcategorias] = useState(null)
    

    useEffect(()=>{
        getCategories()
    },[])

    
    const getCategories = () =>{
        getCategoriesService()
            .then((res)=>{  
                setcategorias(res)
        }) 
    }

    

    return (<>
                

                {
                    categorias === null ?
                    (<Cargando/>)
                    :
                    <TablaCategorias 
                        categorias={categorias} 
                      />
                }
            </>)
}

export default Categorias;