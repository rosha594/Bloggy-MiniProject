import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Create_Blog() {
  return (
    <div>
        <h1>Create New Blog</h1>
        <label>Blog Heading</label><br/>
        <input type="textarea" name='blog_title'/><br/>
        <label>Blog description</label><br/>
        <input type="textarea" name='blog_description'/><br/>
        <label>Blog Content</label><br/>
        <input type="textarea" name='blog_content'/><br/>
        <label>Blog Tags (separate with space)</label><br/>
        <input type="textarea" name='blog_tags'/><br/>
        <label>Add Cover Image</label><br/>
        <input type="file" name='cover_image'/><br/>
        <button>Post</button>
        <button>Save</button>
        <button>Clear</button>     
        <Outlet/>
    </div>
  )
}
