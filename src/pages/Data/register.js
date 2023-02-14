import React from 'react'
import './style.css';
import { useState } from 'react';
export default function register() {

  // const [userData,setUserData]= useState(
  //   {
  //     username:"",
  //     password:"",
  //     OTP:"",
  //     org:""
  //   });
let userData="";
    const handleInp =(e)=>
    { 
      const name=e.target.name;
      const value=e.target.value;

  
    };
  return (
    <div className='user-account text-center'>
        {/* Login Form */}
      <div className='user-login'>
        <div className='form'>
            <h3>Login </h3>
            <form >
            <input type="text" required name='username' value={userData.username} onChange={handleInp} placeholder='User Name'/>
            <input type="password" required name='password ' onChange={handleInp} value={userData.password} placeholder='Password'/> <br/>
            <input type="text" required name='OTP' value={userData.OTP} onChange={handleInp} placeholder='OTP'/><br/>
            {/* <input type="text" required name='Org' placeholder='Organization Name'/><br/> */}
            <select name="org" value={userData.org} onChange={handleInp} id="org">
                <option value="ACS">ACS solutions</option>
                <option value="Accenture">Accenture</option>
                <option value="Infosys">Infosys</option>
                <option value="Amazon">Amazon</option>
                <option value="other">Others..</option>
            </select><br/>
            <input type="submit" required className='btn btn-success' value='Login' /><br/>
            </form>
            
        </div>
      </div>
      {/* Register form */}
      <div className='user-reg'>
        <div className='form'>
            <h3>Register</h3>
            <form method='post' action=''>
            <input type="text" required placeholder='First Name'/>
            <input type="text" required placeholder='Last Name'/> <br/>
            <input type="password" required placeholder='Password'/><br/>
            <input type="text" required placeholder='Organization Name'/><br/>
            <input type="text" required placeholder='City'/> <br/>
            <input type="submit" className='btn btn-danger' required value='Register'/><br/>
            </form>
            
        </div>
      </div>
    </div>
  )
}
