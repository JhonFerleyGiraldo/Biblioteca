import { useCallback, useEffect, useState } from "react";
import {getLibros} from "../Services/LibroService"
import TablaLibros from "../Components/Libros/TablaLibros";
import FormularioLibro from "../Components/Libros/FormularioLibro";
import Toast from '../SwalAlert'
import Cargando from "../Components/Cargando";

const Libros = () => {


    const [libros,setLibros] = useState(null)
    const [libro,setLibro] = useState({
        id:0,
        nombre:'',
        autor:'',
        descripcion:'',
        editorial:'',
        idioma:'',
        precio:'',
        fechaPublicacion:''
      })

    
    const obtenerLibros = useCallback(async() =>{
        const res = await getLibros()
        setLibros(res)
        console.log(res)
    },[])


    useEffect(()=>{
        obtenerLibros()
    },[libros])


    const editarElemento = (item) => {
        setLibro(item)
    }

    return (<>
                <FormularioLibro libroProp={libro} obtenerLibros={()=>{obtenerLibros()}}/>
                {
                    libros === null ?
                    (<Cargando/>)
                    :
                    <TablaLibros libros={libros} seleccionarElemento={(item)=>{editarElemento(item)}} />
                }
            </>)
}

export default Libros;