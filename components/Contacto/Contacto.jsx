import React from 'react'
import '../Contacto/Contacto.css'

const Contacto = () => {
  return (
    <>
      <main className="contacto__hero">
        <section className="contacto__box">
            <div className="box__info">
             <h2>CONTACTATE CON NOSOTROS</h2>
             <div className="data">
                   <p><i className="fa-solid fa-phone"></i>+54 123 456 789</p>
                    <p><i className="fa-solid fa-envelope"></i>sancristobalviajes@sancristobal.com</p>
                <p><i className="fa-solid fa-location-dot"></i>En algun lugar de CABA</p>
            </div>
            <div className="links">
                <a href=""><i className="fa-brands fa-facebook"></i></a>
                <a href=""><i className="fa-brands fa-instagram"></i></a>
                <a href=""><i className="fa-brands fa-x-twitter"></i></a>
                <a href=""><i className="fa-regular fa-envelope"></i></a>
            </div>
        </div>
            <form>
                <div className="input-box">
                    <input type="text" required placeholder="Nombre y Apellido"/>
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className="input-box">
                    <input type="email" required placeholder="Correo Electronico"/>
                    <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="input-box">
                    <input type="text" required
                    placeholder="Asunto"/>
                    <i className="fa-solid fa-pen-square"></i>
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
