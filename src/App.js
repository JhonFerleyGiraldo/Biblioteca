import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import NavBarComponent from './Components/NavBarComponent'
import Home from "./Pages/Home";
import Libros from "./Pages/Libros/Libros";
import DetalleLibro from "./Pages/Libros/DetalleLibro";
import Categorias from "./Pages/Categorias/Categorias";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent/>
        <Routes>
          <Route path="/Libros" Component={Libros} />
          <Route path="/DetalleLibro/:idLibro" Component={DetalleLibro} />
          <Route path="/Categorias" Component={Categorias} />
          <Route exact path="/" Component={Home} />
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
