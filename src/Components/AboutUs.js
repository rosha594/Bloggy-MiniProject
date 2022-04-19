import React from 'react'
import {Link} from 'react-router-dom'

export default function AboutUs() {
  return (
    <div>
        <h1>Team Members</h1>
        <h3>Ashish Bopache</h3>
        <h3>Pallavi Shankapale</h3>
        <h3>Shreya Pokale</h3>
        <h3>Roshan Bende</h3>

        <Link to='/'><button>Home Page</button></Link>
    </div>
  )
}
