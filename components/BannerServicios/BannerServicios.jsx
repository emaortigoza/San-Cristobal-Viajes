import React from 'react'
import './BannerServicios.css'

const BannerServicios = () => {
  return (
    <section className="servicios__hero">
            <div className="servicios__cards">
                <div className="servicios__card caja1">
                    <h3> <i className="fa-solid fa-circle-info"></i> ¿Necesitas ayuda? </h3>
                    <p>Encontra toda la información que necesitas</p>
                </div>
                <div className="servicios__card caja2">
                    <h3> <i className="fa-solid fa-magnifying-glass-dollar"></i> Ofertas</h3>
                    <p>Conocé las mejores ofertas de la semana</p>
                </div>
                <div className="servicios__card caja3">
                    <h3><i className="fa-solid fa-store"></i> Sucursales</h3>
                    <p>Contamos con la mejor atención personalizada</p>
                </div>
                <div className="servicios__card caja4">
                    <h3><i className="fa-solid fa-calendar-days"></i> Reservas</h3>
                    <p>Conocé los detalles y politicas de tus reservas</p>
                </div>

            </div>
        </section>
  )
}

export default BannerServicios