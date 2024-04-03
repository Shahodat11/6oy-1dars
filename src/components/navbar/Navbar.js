import React from 'react'
import "./Navbar.css"
import Search from"../images/search-regular-24.png"
import Menu from"../images/menu-regular-24.png"
import logo from "../images/Screenshot_5.png"

function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
          <ul class="nav-items" id="navbar-responsive">
        <li>
          <a href="#"><img src={logo} alt="" /></a>
        </li>
        <li>
          <a href="#">Phone</a>
        </li>
        <li>
          <a href="#">Smart Home</a>
        </li>
        <li>
          <a href="#">Life Style</a>
        </li>
        <li>
          <a href="#">Discover</a>
        </li>
        <li>
          <a href="#">Supper</a>
        </li>
        <li>
          <a href="#"><img src={Search} alt="" /> <img src={Menu} alt="" /></a>
        </li>
          
      </ul>      
      </div>

    </div>
  )
}

export default Navbar