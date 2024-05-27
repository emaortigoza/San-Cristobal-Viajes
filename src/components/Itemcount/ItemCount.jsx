import React, { useRef, useState } from 'react'

const ItemCount = () => {

    const [counter, setCounter] = useState(0)
    const renderCount =useRef(0)
   
  console.log(renderCount)
    let handleCount = () =>{
        setCounter(counter + 1)
    }

    renderCount.current++

  return (
    <div>
        <p>Clicks: {counter}</p>
        <button onClick={handleCount}> + 1 </button> 
        <p>Cantidad de renderizados: {renderCount.current}</p>

    </div>
  )
}

export default ItemCount
