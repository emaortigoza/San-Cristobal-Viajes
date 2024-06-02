import React from 'react'
import Logo from '../Logo/Logo'
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link, NavLink, useParams } from 'react-router-dom'

const NavBar = () => {
  
  return (
        <Navbar className="cabecera" sticky="top">
            <Link to='/'><Logo /></Link>
            
            <ul className="menu">
                <li className="menu__item "><NavLink to='/' className={({isActive})=> isActive ? 'active' : ''}>Home</NavLink></li>

                <li className="menu__item"><NavLink to='/servicios' className={({isActive})=> isActive ? 'active' : ''}>Servicios</NavLink></li>
                <li className="menu__item"><Link><NavDropdown  title="Destinos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1"><NavLink to='/categoria/Argentina' className={({isActive})=> isActive ? 'active' : ''}>Argentina</NavLink></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2"><NavLink to='/categoria/Caribe' className={({isActive})=> isActive ? 'active' : ''}>Caribe</NavLink></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3"><NavLink to='/categoria/Europa'className={({isActive})=> isActive ? 'active' : ''}>Europa</NavLink></NavDropdown.Item>
                  </NavDropdown></Link>
                </li>
                <li className="menu__item"><NavLink to='/contacto'className={({isActive})=> isActive ? 'active' : ''}>Contacto</NavLink></li>
                <li className="menu__item"><NavLink to='/cart'className={({isActive})=> isActive ? 'active' : ''}><CardWidget/></NavLink></li>
            </ul>
        </Navbar>
  )
}

export default NavBar