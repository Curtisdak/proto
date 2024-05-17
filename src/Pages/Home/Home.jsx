
import { Outlet } from 'react-router-dom'
import {Logo} from "../../components/Logo/Logo" ;
import NavBar from "../../components/Navbar/Navbar"
import "./home.css"

const Home = () => {
  return (
    <div id="home">
      <Logo/>
      <Outlet/>
      <NavBar/>
    </div>
  )
}

export default Home