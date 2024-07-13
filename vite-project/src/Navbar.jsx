import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav class="navbar">
        <h1 id="website_name">
          <Link to="/" class="title">TeamBook</Link>
        </h1>
        <div class="nav_middle_links">
          <Link to="/*" class="link">About</Link>
          <Link to="/*" class="link">Contact</Link>
          <Link to="/*" class="link">Services</Link>
        </div>
        <div class="buttons">
          <button id="loginBtn">Login</button>
          <button id="signinBtn">Signin</button>
          <img src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-24-128.png" id="menu_icon"/>
        </div>      
      </nav>
    </>
  )
}

export default Navbar