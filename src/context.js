import React, { createContext, useState } from 'react'


export const ShopContext= createContext(null);
const ShopContextProvider = (props) => {

    return <ShopContextProvider>{props.children}</ShopContextProvider> 
}

export default  ShopContextProvider
