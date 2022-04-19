import React from 'react'
import {Link, matchPath} from 'react-router-dom'
import Food from '../food.jpg'
import '../App.css'

export default function Blog() {
  

  return (
    <div className='Blogs' id='blog_summary_view'>
      <h1>Blogs</h1>
      <div id='blog_image'><img src={Food} className='Blog_img'></img></div>
      <div id='blog_title'><h5>This is Blog Title</h5></div>
      <div id="blog_description"><p>This is the Paragraph describing the summary og the blogs.</p></div>

    </div>
  )
}


