let destinos = [
    {id: '1', categoria: 'Argentina', name: 'Rosario', stock: 60, price: 70000, foto: '/public/images/destino-rosario.jpg'},
    {id: '2', categoria: 'Argentina', name: 'San Martin de los Andes', stock: 60, price: 95000, foto: '/public/images/destino-SanMartinDeLosAndes.jpg'},
    {id: '3', categoria: 'Argentina', name: 'Jujuy', stock: 60, price: 85000, foto: '/public/images/destino-Jujuy.jpg'},
    {id: '4', categoria: 'Argentina', name: 'Mendoza', stock: 60, price: 80000, foto: '/public/images/destino-Mendoza.jpg'},
    {id: '5', categoria: 'Europa', name: 'Madrid', stock: 60, price: 600000, foto: '/public/images/destino-Madrid.jpg'},
    {id: '6', categoria: 'Europa', name: 'Londres', stock: 60, price: 500000, foto: '/public/images/destino-Londrea.jpg'},
    {id: '7', categoria: 'Europa', name: 'Paris', stock: 60, price: 900000, foto: '/public/images/destino-Paris.jpg'},
    {id: '8', categoria: 'Caribe', name: 'Bahamas', stock: 60, price: 1000000, foto: '/public/images/destino-Bahamas.jpg'},
    {id: '9', categoria: 'Caribe', name: 'Aruba', stock: 60, price: 1500000, foto: '/public/images/destino-Aruba.jpg'},
    {id: '10', categoria: 'Caribe', name: 'Curacao', stock: 60, price: 1700000, foto: '/public/images/destino-Curacao.jpg'}
  ]
  
  export const mFectch = () =>{
    return new Promise((res, rej) =>{
  
      setTimeout(() =>{
        res(destinos)
      },5000)
  })
  }