import React from 'react'
import img from '../assets/hero.png'
import './CSS/Home.css'


const Home = () => {
  return (
    <div className='pages'>
        <div className='banner'>
            <div className="bannerContent">
                <div className="bannerHeader">
                    WE HEAR WE MAKE IT HAPPEN
                </div>
                <div className="bannerSubtitle">
                    Website Development and Graphic Designing
                </div>
                <div className="bannerDescription">
                    We provide a complete web and app solution by providing you the esential services including branding, graphic design, UX/UI design, web development, content, social media integration, SEO, and online marketing.
                </div>
                <button className='bannerButton'>Connect Now</button>
            </div>
            <div>
                <img className="bannerImage" src={img} alt='banner-image'/>
            </div>
        </div>
    </div>
  )
}

export default Home