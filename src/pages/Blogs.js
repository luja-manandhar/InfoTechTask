import React from 'react'
import './CSS/Blog.css'
import RecentProject from "./blogBlocks/RecentProject";
import Customers from "./blogBlocks/Customers";
import Testimonials from "./blogBlocks/Testimonials";
import Features from "./blogBlocks/Features";
import Teams from "./blogBlocks/Teams";
import Tools from "./blogBlocks/Tools";


const Blogs = () => {
  return (
    <div className='pages'>
          <div className="blogContainer">
                <RecentProject />
                <Customers />
                <Testimonials />
                <Features />
                <Teams />
                <Tools />
          </div>
    </div>
  )
}

export default Blogs