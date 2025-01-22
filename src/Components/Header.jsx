
import { NavLink } from "react-router-dom"

function Header(){

    return <div className="flex bg-blue-500 px-20 py-5 justify-between">
        <h1 className="text-3xl font-semibold">Header</h1>
        <ul className=" flex gap-5 text-2xl ">

          <NavLink to='/'><li>Home</li> </NavLink > 
          <NavLink  to='/About'><li>About</li></NavLink > 
          <NavLink  to='/Service'><li>Service</li></NavLink > 
          <NavLink  to='/Contact'><li>Contact</li></NavLink > 

        </ul>
    </div>
}


export default Header