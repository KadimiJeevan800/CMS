import React from 'react'
import './style.css';
export default function register() {
  return (
    <div className='user-account'>
        {/* Login Form */}
      <div className='user-login'>
        <div className='form'>
            <h3>Login </h3>
            <form method='post' action='action.php'>
            <input type="text" required placeholder='User Name'/>
            <input type="password" required placeholder='Password'/> <br/>
            <input type="text" required placeholder='OTP'/><br/>
            <input type="text" required placeholder='Organization Name'/><br/>
            <select name="org" id="org">
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
