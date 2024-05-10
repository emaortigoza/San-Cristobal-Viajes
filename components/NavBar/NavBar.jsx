import React from 'react'
import Logo from '../Logo/Logo'
import './NavBar.css'

const NavBar = () => {
  return (
        <nav className="cabecera">
            <Logo />
            <ul className="menu">
                <li className="menu__item "><a class="active" href="./index.html">Home</a></li>
                <li className="menu__item"><a href="">Servicios</a></li>
                <li className="menu__item"><a href="">Paquetes</a></li>
                <li className="menu__item"><a href="./pages/contacto.html">Contacto</a></li>
            </ul>
        </nav>
  )
}

export default NavBar