import { useCallback, useEffect, useState } from "react";
import TablaLibros from "../../Components/Libros/TablaLibros";
import FormularioLibro from "../../Components/Libros/FormularioLibro";
import Toast from '../../SwalAlert'
import Cargando from "../../Components/Cargando";
import {ventanaEliminar} from '../../SwalAlert'
import { getCategoriesService } from "../../Services/CategoryService";
import {getBooksService,addBookService, updateBookService,deleteBookService} from "../../Services/BookService"
const Libros = () => {

    const [libros,setLibros] = useState(null)
    const [categorias,setcategorias] = useState(null)
    const [libro,setLibro] = useState({
        id:0,
        nombre:'',
        autor:'',
        descripcion:'',
        editorial:'',
        idioma:'',
        precio:0,
        fechaPublicacion:'',
        categoriaId:0
    })

    useEffect(()=>{
        getBooks()
        getCategories()
    },[])

    const getBooks = () =>{
        getBooksService()
            .then((res)=>{
                setLibros(res)
        }) 
    }

    const createBook = (data) => {
        addBookService(data)
        .then((res)=>{
            setLibros([...libros,res])
        })
    }

    const updateBook = (data) => {
        updateBookService(data)
        .then((res)=>{
            let newData = libros.map((x)=>(x.id === data.id ? data : x))
            setLibros(newData)
        })
    }

    const getCategories = () =>{
        getCategoriesService()
            .then((res)=>{  
                setcategorias(res)
        }) 
    }

    const deleteBook = (bookId) => {
        ventanaEliminar(bookId).then(response => {
            if(response){
                deleteBookService(bookId)
                .then((res)=>{
                    let newData = libros.filter((x)=>x.id !== bookId)
                    setLibros(newData)
                    Toast.fire({
                        icon: 'success',
                        title: 'Registro eliminado correctamente!'
                    })
                })
                

            }
        })  
    }

    return (<>
                <FormularioLibro
                    libroProp={libro} 
                    setLibroProp={setLibro}
                    createData={createBook} 
                    updateData={updateBook}
                    categorias={categorias}/>

                {
                    libros === null ?
                    (<Cargando/>)
                    :
                    <TablaLibros 
                        libros={libros} 
                        selectEditBook={setLibro}  
                        deleteData={deleteBook}/>
                }
            </>)
}

export default Libros;