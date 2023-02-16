import React,{useEffect,useState, useContext} from 'react'

import { UserContext  } from '../context.js';
export default function user() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setData(data));
   }, []);
  //  const value = React.useContext(UserContext); 
    return (
      <div className='container text-center mt-5'>
       <form  className='userform' action='localhost:3001'>
          <div>
            <label htmlFor="username">Name : </label>
            <input type="text" required name='username'  placeholder='User Name'/> 
          </div><br />
          <div>
            <label htmlFor="password">Password : </label>
            <input type="password" required name='password'  placeholder='Password'/> <br/>
          </div> <br/>
            <input type="submit" required value="Add user" className='btn button-i'/> 
       </form>   


       
      <UserContext.Consumer>
        {value => <h1>{value}</h1>} 
        {/* prints: Reed */}
      </UserContext.Consumer>
       
      </div>
    );

  
  }
