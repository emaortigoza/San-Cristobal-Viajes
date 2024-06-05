import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = ()=>useContext(CartContext)

export const CartContextProvider = ({children})=>{

    const [cartList, setCartList] =useState([])

    const addToCart = (newDestino)=>{
        const idx = cartList.findIndex(destino => newDestino.id == destino.id)
        if (idx == -1) {

            setCartList([...cartList, newDestino])
            
        }else{
            cartList[idx].cantidad += newDestino.cantidad
            setCartList([...cartList])
        }
    }

    const cantidadTotal = () => cartList.reduce((total, objproducto)=> total += objproducto.cantidad, 0)

    const precioTotal = () => cartList.reduce((total, objProducto)=> total += (objProducto.cantidad * objProducto.price), 0)

    const vaciarCarrito = () =>{
        setCartList([])
    }
    const eliminarProducto = (pid) =>{
        setCartList(cartList.filter((producto)=> producto.id !== pid))
    }


    

return(

    <CartContext.Provider value={{
        cartList,
        addToCart,
        vaciarCarrito,
        precioTotal,
        cantidadTotal,
        eliminarProducto
        }}>
        {children}
    </CartContext.Provider>
)
}