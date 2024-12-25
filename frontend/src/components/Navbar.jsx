import { NavLink } from "react-router-dom"
import './Navbar.css'

const Header = () => {
    return (
      <nav>
        <NavLink to={"/"}><div>Home</div></NavLink>
        <NavLink to={"/playstation"}><div>Playstation</div></NavLink>
        <NavLink to={"/xbox"}><div>Xbox</div></NavLink>
        <NavLink to={"/nintendo"}><div>Nintendo</div></NavLink>
      </nav>
  )
}
  
  export default Header