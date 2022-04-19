import React from 'react'
import {Link} from 'react-router-dom'
export default function Profile() {
  return (
    <div>
      <h1>Profile Setting</h1>
      <label>Full Name</label>
      <br/>
      <input type={Text} name="name"></input>
      <br/>
      <label>Email</label>
      <br/>
      <input type={Text} name="email"></input>
      <br/>
      <label>Password</label>
      <br/>
      <input type={'password'} name="password"></input>
      <br/>
      <label>Verify Password</label>
      <br/>
      <input type={'password'} name="re-password"></input>
      <br/>
      <input type="radio" value="Reader" name="Role" /> Reader
      <input type="radio" value="Blogger" name="Role" />Blogger
      <br/>
      <Link to='/login'><button>Update</button></Link>

    </div>
  )
}
