import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

export default function LogInPage() {
  return (
    <div className='AuthenticationPage'>
        <div className='loginForm'>
            <label>User Name :</label>
            <input type={Text} name="name"></input>
            <br />
            <label>Password :</label>
            <input type={'password'} name="password"></input>
            <br />
            <Link to='/homePage'><button>Log In</button></Link>
        </div>
        <Link to='/signup'><button>Create New Account</button></Link>
        
    </div>
  )
}
