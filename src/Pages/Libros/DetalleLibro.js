import React,{useState, useEffect, useCallback} from 'react'
import { useParams } from 'react-router-dom'
import {getLibro} from '../../Services/LibroService'
import Libro from '../../Components/Libros/Libro';

const DetalleLibro = () => {

    const {idLibro} = useParams()
    const [libro,setLibro] = useState(null)

    const obtenerLibro = useCallback(async() =>{
        const res = await getLibro(idLibro)
        setLibro(res)
        console.log(res)
    },[])

    useEffect(()=>{
        obtenerLibro()
    },[])

    return (
        <>
            {
                libro &&
                <Libro libro={libro} />
            }    
        </>    
    )
}

export default DetalleLibro