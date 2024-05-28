import React from 'react'
import Logo from '../Logo/Logo'
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'
import { NavDropdown } from 'react-bootstrap'

const NavBar = () => {
  return (
        <nav className="cabecera">
            <Logo />
            <ul className="menu">
                <li className="menu__item "><a class="active" href="./index.html">Home</a></li>
                <li className="menu__item"><a href="">Servicios</a></li>
                <li className="menu__item"><a href=""><NavDropdown className='dropdown' title="Destinos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Argentina</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Caribe</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Europa</NavDropdown.Item>
                  </NavDropdown></a>
                </li>
                <li className="menu__item"><a href="./pages/contacto.html">Contacto</a></li>
                <li className="menu__item"><a href="./pages/login.html"><CardWidget/></a></li>
            </ul>
        </nav>
  )
}

export default NavBar