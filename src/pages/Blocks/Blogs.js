import React from 'react'
import '../CSS/Blog.css'
import RecentProject from "./RecentProject";
import Customers from "./Customers";
import Testimonials from "./Testimonials";
import Features from "./Features";
import Teams from "./Teams";
import Tools from "./Tools";


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