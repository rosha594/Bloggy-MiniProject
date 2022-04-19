import React from 'react'
import default1 from '../default.png'
import '../App.css'

export default function Following() {
  return (
    <div className='following'>
      <h1>Following</h1>
      <div>
        <img src={default1} id="following_img" className="profile_img"/>
      </div>
      <h3 id="blogger_name">Demo Blogger</h3>
      <h3 id="blogger_email">Demo_blogger_email@gmail.com</h3>
    </div>
  )
}
