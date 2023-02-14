import React, { createContext, useState } from 'react'


const getCart=()=>
{

}

export const ShopContext= createContext(null);
const ShopContextProvider = (props) => {
  
    const [cartItems,setCartItems]=useState(cart);
    return <ShopContextProvider>{props.children}</ShopContextProvider> 
}

export default  ShopContextProvider
