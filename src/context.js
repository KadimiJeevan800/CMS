import React, { createContext } from 'react'

export const UserContext = createContext();
// export const ShopContext= createContext();
const UserContextProvider = (props) => {

    return (
        <UserContext.Provider value="alien">
          
        </UserContext.Provider>
      )
}

export default  UserContextProvider
