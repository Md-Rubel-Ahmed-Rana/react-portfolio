import React from 'react'
import "./Navbar.css"
import logo from "./logo.jpg"
import collapseImage from "./collapse.jpg"
import banner from "./banner.png";

function Navbar() {
  return (
    <>
    <header>
          <div className='container'>
              <nav className='container-wrapper'>
                  <div className='logo'>
                      <img src={logo} alt='logo' />
                      <h2>Md Rubel Ahmed Rana</h2>
                  </div>
                  <div>
                      <ul className='navbar-disc'>
                          <li>Home</li>
                          <li> About </li>
                          <li> Services </li>
                          <li> Blogs </li>
                      </ul>
                      <div className='collapse'>
                          <img src={collapseImage} alt='logo' />
                      </div>
                  </div>
              </nav>
          </div>
              <div className='banner'>
                  <div className='banner-info'>
                      <h1>Future Web Developer</h1>
                      <p>
                          Hi there, as you see my portfolio you might be understood that I am a Web Developer. I always try to do something to my best. As a web developer, at first I design a UI (user interface) with HTML and CSS and then will convert it to a demandable Website , Web Application or Desktop Application as the client or company requirement by using the most popular technology ( Vanilla JavaScript, Reactjs, TypeScript, Nodejs, Expressjs, MongoDB ( noSQL Database )) or others technologies I could be able to do.</p>
                  </div>
                  <div className='banner-img'>
                      <img src= {banner} alt='logo' />
                  </div>
              </div>
    </header>
    </>
  )
}

export default Navbar