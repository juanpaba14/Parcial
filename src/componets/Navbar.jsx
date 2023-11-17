import { NavLink } from "react-router-dom"
const NavBar = () => {
    return (
      
          <nav >
              <div className="container flex justify-center gap-20">
                    <NavLink to="/" className=" text-black">Home</NavLink>
                    <NavLink to="/promo" className="text-black">Promo</NavLink>
                    <NavLink to="/about" className="text-black">About</NavLink>
                  

                </div>
            </nav>
           

            
 

    )
}

export default NavBar;