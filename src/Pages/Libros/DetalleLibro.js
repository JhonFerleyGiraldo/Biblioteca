import React,{useState, useEffect, useCallback} from 'react'
import { useParams } from 'react-router-dom'
import {getBookService} from '../../Services/BookService'
import Libro from '../../Components/Libros/Libro';

const DetalleLibro = () => {

    const {idLibro} = useParams()
    const [libro,setLibro] = useState(null)

    const getBook = () =>{
        getBookService(idLibro)
            .then((res)=>{
                setLibro(res)
        }) 
    }

    useEffect(()=>{
        getBook()
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