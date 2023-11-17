import { Route,Routes } from "react-router-dom";
import NavBar from "./componets/Navbar"
import Promo from "./componets/Promo";
import Inicio from "./componets/Inicio";
import About from "./componets/About";

const App = () => { 
  return(
    <>
    <div className="text-black" >
<NavBar/>



<Routes>
<Route element={<Inicio/>} path="/">home</Route>

  <Route element={<Promo/>} path="/promo">Promo</Route>
  <Route element={<About/>} path="/about">About</Route>
</Routes>


    </div>

    
    </>

  )
 }
 export default App