

import { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import BannerPrincipal from '../components/BannerPrincipal/BannerPrincipal'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer/Footer'




function App() {
/* /* const [counter, setCounter] = useState(0)
let handleCount = () =>{
  setCounter(counter + 1)
  <p>Clicks: {counter}</p>
    <button onClick={handleCount}> + 1 </button> 
} */

  return (
   <div>
    <NavBar/>
    <BannerPrincipal/>
    <ItemListContainer/>
    <Footer/>
   </div>
  )
}

export default App
