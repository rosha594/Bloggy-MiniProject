import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

export default function SignUpPage() {
  return (
    <div className='AuthenticationPage'>
      <h1>Sign UP Page</h1>
        <div className="signupForm">
            <label>Full Name :</label>
            <br/>
            <input type={Text} name="name"></input>
            <br />
            <label>Email :</label>
            <br/>
            <input type={Text} name="email"></input>
            <br />
            <label>Password :</label>
            <br/>
            <input type={'password'} name="password"></input>
            <br />
            <label>Verify Password :</label>
            <br/>
            <input type={'password'} name="re-password"></input>
            <br />
            <label>Age : </label>
            <br/>
            <input type={Text} name="age"></input>
            <br />
            <input type="radio" value="Reader" name="Role" /> Reader
            <input type="radio" value="Blogger" name="Role" />Blogger
            <br/>
            <Link to='/login'><button>Sign Up</button></Link>
        </div>
        

    </div>
  )
}
