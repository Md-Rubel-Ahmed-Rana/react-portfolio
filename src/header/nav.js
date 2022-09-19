import React from 'react'
import "./nav.css"
import logo from "./logo.jpg"
import collapseImage from "./collapse.jpg"

function Navbar() {
  return (
    <header>
          <div className='container'>
              <div className='logo'>
                  <img src={logo} alt='logo' />
                  <h2>Md Rubel Ahmed Rana</h2>
              </div>
              <div>
                  <ul className='navbar-disc'>
                      <li> Home </li>
                      <li> About </li>
                      <li> Services </li>
                      <li> Blogs </li>
                  </ul>
                  <div className='collapse' id='collapse'>
                      <img  src={collapseImage} alt='logo' />
                  </div>
              </div>
          </div>
        </header>
  )
}

export default Navbar