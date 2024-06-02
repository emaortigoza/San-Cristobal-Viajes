import React from 'react'
import Logo from '../Logo/Logo'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <Logo/>
        <div className="footer__redSocialContainer">
            <Link to='/' className="redsocial__icono"><i><FontAwesomeIcon icon={faFacebook} /></i></Link>
            <Link to='/' className="redsocial__icono"><i><FontAwesomeIcon icon={faInstagram} /></i></Link>
            <Link to='/' className="redsocial__icono"><i><FontAwesomeIcon icon={faXTwitter} /></i></Link>
            <Link to='/' className="redsocial__icono"><i><FontAwesomeIcon icon={faEnvelope} /></i></Link>
        </div>
        <ul className="footer__menuContainer">
            <li className="menu__item">Privacidad</li>
            <li className="menu__item">Legales</li>
            <li className="menu__item">Nosotros</li>
            <li className="menu__item">San Cristóbal Seguros</li>
        </ul>
        <span className="copyright">&copy;2024, elemavo. Todos los derechos reservados</span>
    </footer>
  )
}

export default Footer