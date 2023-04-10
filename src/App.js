import Libros from "./Pages/Libros";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import NavBarComponent from './Components/NavBarComponent'
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent/>
        <Routes>
          <Route path="/Libros" Component={Libros} />
          <Route exact path="/" Component={Home} />
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
