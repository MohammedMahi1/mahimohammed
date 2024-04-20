import { Link, NavLink } from "react-router-dom"
import './style.scss'
import { RiHome2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsWindow } from "react-icons/bs";
import Button from "../Button/Button";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="group-links">
        <NavLink to="/" className='link'><RiHome2Line className="icon-link"/></NavLink>
        <NavLink to="/about" className='link'><CgProfile className="icon-link"/></NavLink>
        <NavLink to="/works" className='link'><BsWindow className="icon-link"/></NavLink>
      </div>
      <Link to='/contact' className="link">
        <Button label="Hire me" className="btn-contained"/>
      </Link>
    </div>
  )
}

export default NavBar
