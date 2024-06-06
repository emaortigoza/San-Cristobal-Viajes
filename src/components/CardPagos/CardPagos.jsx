import './CardPagos.css'

const CardPagos = () => {
  return (
    <div>
      <main className="contacto__pagos">
      <form>
                <h2>Ingrese sus datos para finalizar la compra</h2>
                <div className="input-box">
                    <input type="text" required placeholder="Nombre y Apellido"/>
                    
                </div>
                <div className="input-box">
                    <input type="number" required placeholder="Telefono"/>
                    
                </div>

                <div className="input-box">
                    <input type="email" required placeholder="Correo Electronico"/>
                   
                </div>
                <div className="input-box">
                    <input type="text" required
                    placeholder="Reingrese su Correo"/>
                    
                </div>
                
                <button type="submit">Generar orden</button>
            </form>   
    </main>
    </div>
  )
}

export default CardPagos
