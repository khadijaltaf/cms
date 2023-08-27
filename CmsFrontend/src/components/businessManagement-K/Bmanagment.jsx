import React, { useEffect, useState } from 'react'
import './Bmanagment.css'
import { getBlogs } from '../../services/blogs.service.js';

const Bmanagment = () => {
let [blogs, setblogs] =  useState([]);
useEffect(()=>{
  getBlogs().then((blogs)=>{
    setblogs(blogs);
  }).catch(err=>{

  })
})

  return (
    <div>
      <div>
        <br /><br />
        <button className='btn btn-secondary aa'>Manage</button>
        <button class="btn btn-primary aa" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Add Blog</button>
<br /><br /><br />
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Create Blog</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <form>
              <div class="mb-3">
                <label for="exampleInputText" class="form-label">Title</label>
                <input type="text" class="form-control" />
                <div id="emailHelp" class="form-text">Will appear as the title .</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputText" class="form-label">Blog</label>
                <input type="text" class="form-control" />
              </div>

              <div class="input-group mb-3">
                <input type="file" class="form-control" id="inputGroupFile02" />
                <label class="input-group-text" for="inputGroupFile02">Upload</label>
              </div>

              <button type="submit" class="btn btn-primary">Publish</button>
            </form>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Action</th>
            <th scope="col">Sno.</th>
            <th scope="col">Title</th>
            <th scope="col">Author Name</th>

            <th scope="col">Publishing Date</th>
            <th scope="col">Updated Date</th>


          </tr>
        </thead>
        <tbody>
          {blogs.map ((blog)=>{
            return <tr>
            <th scope="row"><button className=' btn btn-success'>open</button><button className=' btn btn-danger'>Delete</button><button className=' btn btn-primary'>Edit</button></th>
            <th>{blog._id}</th>
            <td>{blog.title}</td>
            <td>{blog.body}</td>

            <td>{blog.createdAt}</td>
            <td>{blog.updatedAt}</td>


          </tr>
          })}
          
         
        </tbody>
      </table>
    </div>
  )
}

export default Bmanagment