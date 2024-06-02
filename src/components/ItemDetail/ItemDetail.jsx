

const ItemDetail = ({destino}) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <img src={destino.foto} className="w-50" alt="" />
          <h3>Nombre: {destino.name} </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quia repellendus perferendis sint voluptatibus velit?</p>
        </div>
        <div className="col">

        </div>
      </div>
    </>
  )
}

export default ItemDetail
