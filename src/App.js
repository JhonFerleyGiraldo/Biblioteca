import Libros from "./Pages/Libros";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import NavBarComponent from './Components/NavBarComponent'



function App() {
  return (
    <>
    <BrowserRouter>
      <NavBarComponent/>
      <Routes>
        <Route path="/" Component={Libros} />
      </Routes>
    </BrowserRouter>
      
       
    </>
  );
}

export default App;
