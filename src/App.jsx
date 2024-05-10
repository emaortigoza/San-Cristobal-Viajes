

import { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import './App.css'









function App() {
const [counter, setCounter] = useState(0)
let handleCount = () =>{
  setCounter(counter + 1)
}

  return (
   <div>
    <NavBar/>
    <p>Clicks: {counter}</p>
    <button onClick={handleCount}> + 1 </button>
   </div>
  )
}

export default App
