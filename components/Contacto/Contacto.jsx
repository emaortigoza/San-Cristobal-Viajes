import React from 'react'
import '../Contacto/Contacto.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'


const Contacto = () => {
  return (
    <>
      <main className="contacto__hero">
        <section className="contacto__box">
            <div className="box__info">
                <h2>CONTACTATE CON NOSOTROS</h2>
                <div className="data">
                    <p><i><FontAwesomeIcon icon={faPhone} /></i>+54 123 456 789</p>
                    <p><i><FontAwesomeIcon icon={faEnvelope} /></i>sancristobalviajes@sancristobal.com</p>
                    <p><i><FontAwesomeIcon icon={faLocationDot} /></i>En algun lugar de CABA</p>
                </div>
           
            </div>
            
            <form>
                <div className="input-box">
                    <input type="text" required placeholder="Nombre y Apellido"/>
                    
                </div>
                <div className="input-box">
                    <input type="email" required placeholder="Correo Electronico"/>
                   
                </div>
                <div className="input-box">
                    <input type="text" required
                    placeholder="Asunto"/>
                    
                </div>
                <div className="input-box">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Escribe tu mensaje"></textarea>
                </div>
                <button type="submit">Enviar mensaje</button>
            </form>   
            
        </section>
    </main>
    </>
  )
}

export default Contacto
