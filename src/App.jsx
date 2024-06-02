
import { Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/CartContainer/CartContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'





function App() {

  return (
   <Router>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/detail/:pid' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
       {/*  <Route path='/notfound' element={<NotFound404/>}
        <Route path = '*' element={<Navigate to='/notfound'/>}/> */}
      </Routes>
    <Footer/>
   </Router>
  )
}

export default App
