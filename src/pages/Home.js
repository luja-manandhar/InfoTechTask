import React from 'react'
import img from '../assets/hero.png'
import './CSS/Home.css'


const Home = () => {
  return (
    <div className='pages'>
        <div className='Banner'>
            <div className="BannerContent">
                <div className="Header">
                    WE HEAR WE MAKE IT HAPPEN
                </div>
                <div className="Subtitle">
                    Website Development and Graphic Designing
                </div>
                <div className="Description">
                    We provide a complete web and app solution by providing you the esential services including branding, graphic design, UX/UI design, web development, content, social media integration, SEO, and online marketing.
                </div>
                <button>Connect Now</button>
            </div>
            <div className="ImgContent">
                <img src={img} />
            </div>
        </div>
    </div>
  )
}

export default Home