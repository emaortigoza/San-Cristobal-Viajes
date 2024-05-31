

import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import BannerPrincipal from './components/BannerPrincipal/BannerPrincipal'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import Contacto from './components/Contacto/Contacto'
import ItemCount from './components/Itemcount/ItemCount'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from './components/Formulario/Formulario'





function App() {

  return (
   <div>
    <NavBar/>
    <BannerPrincipal/>
    <ItemListContainer>
      <ItemCount/>
      <Formulario/>
    </ItemListContainer> 
    <Contacto/>
    <Footer/>
   </div>
  )
}

export default App
