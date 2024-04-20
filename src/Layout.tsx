import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"

const Layout = () => {
  return (
    <div className="container">
      <NavBar/>
      <div className="content">
      <Outlet/>
      </div>
    </div>
  )
}

export default Layout
