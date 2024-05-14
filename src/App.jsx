

import { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import './App.css'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'




function App() {
const [counter, setCounter] = useState(0)
let handleCount = () =>{
  setCounter(counter + 1)
}

  return (
   <div>
    <NavBar/>
    <ItemListContainer greeting={'Hola cara de paty, aca vas a ver todo lo que nosotros queramos que veas'}/>
    <p>Clicks: {counter}</p>
    <button onClick={handleCount}> + 1 </button>
   </div>
  )
}

export default App
