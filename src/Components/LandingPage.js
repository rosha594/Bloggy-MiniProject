import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css';
export default function LandingPage() {
  return (
    <div>
        <h4>Header</h4>
        <div className="header">            
                <Link to='/login'>
                    <button>Log In</button>
                </Link>
                <Link to='/signup'>
                    <button>Sign Up</button>
                </Link>            
        </div>
        <hr />
        <h4>Banner</h4>
        <div className="BannerBtns">
            <Link to='/login'>
                <button>Strat Blogging</button>
            </Link>
            <Link to='/aboutUs'>
                <button>Contact Us</button>
            </Link>
        </div>
        <hr />
        <h4>Top Ranked Blogs</h4>
        <div className="Blogs">
            
        </div>

    </div>
  )
}
