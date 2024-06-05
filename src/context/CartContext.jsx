import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = ()=>useContext(CartContext)

export const CartContextProvider = ({children})=>{

    const [cartList, setCartList] =useState([])

    const addToCart = (newDestino)=>{
        setCartList([...cartList, newDestino])
    }

    const vaciarCarrito = () =>{
        setCartList([])
    }
    
return(

    <CartContext.Provider value={{
        cartList,
        addToCart,
        vaciarCarrito
        }}>
        {children}
    </CartContext.Provider>
)
}