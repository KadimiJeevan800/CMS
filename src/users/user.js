import React,{useEffect,useState} from 'react'


export default function user() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setData(data));
   }, []);
  
    return (
      <>
       <form  className='userform'>
            <label htmlFor="username">Name : </label>
            <input type="text" required name='username'  placeholder='User Name'/>
            <label for="password">Password : </label>
            <input type="password" required name='password'  placeholder='Password'/> <br/>
            <input type="submit" required value="Add user"/> <br/>
       </form>   
      </>
    );

  
  }
