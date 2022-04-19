import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import deafult1 from '../default.png'
import '../App.css'


export default function HomePage() {
  return (
    <div className='homePage'>      
      <div className='userProfile'>
        <img src={deafult1} alt="User Profile Picture" className='userImage' id="userPicture"></img>
        <h3 id='userName'>User Name</h3>
        <h4 id='userEmail'>demoUserName@gmail.com</h4>        
        <ul>
          <Link to='/homePage/profile'><li>Profile</li></Link>          
          <Link to='/homePage/create_blog'><li>Create new Blog</li></Link>
          <Link to='/'><li>Log out</li></Link>
          <Link to='/homePage/following'><button>Following</button></Link>
          <Link to='/homePage'><button>Blogs</button></Link>
        </ul>
      </div>
      <Outlet/>
    </div>

  )
}
