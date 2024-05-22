import React from 'react'
import Logo from '../Logo/Logo'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer>
        <Logo/>
        <div className="footer__redSocialContainer">
            <a href="" className="redsocial__icono"><i><FontAwesomeIcon icon={faFacebook} /></i></a>
            <a href="" className="redsocial__icono"><i><FontAwesomeIcon icon={faInstagram} /></i></a>
            <a href="" className="redsocial__icono"><i><FontAwesomeIcon icon={faXTwitter} /></i></a>
            <a href="" className="redsocial__icono"><i><FontAwesomeIcon icon={faEnvelope} /></i></a>
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