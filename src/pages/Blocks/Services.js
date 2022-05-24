import React from 'react'
import Card from '../../components/Cards/serviceCard.js'
import '../CSS/Services.css'
import img1 from '../../assets/cardimg1.svg'
import img2 from '../../assets/cardimg2.svg'
import img3 from '../../assets/cardimg3.svg'
import img4 from '../../assets/cardimg4.svg'
import img5 from '../../assets/cardimg5.svg'
import img6 from '../../assets/cardimg6.svg'

const Services = () => {
  return (
    <div className='pages'>
        <div className="servicesMainContainer">
            <div className="servicesContainer">
                <div>
                    <div className="heading" style={{textAlign: "right"}}> - Our <span className="blue">Services</span></div>
                    <div className="title" style={{textAlign: "right", paddingRight:"20px"}}>
                        Get <span className='blue'>Exceptional</span> Service for Growth.
                    </div>
                </div>
                <div className="vLine"></div>
                <div className="description">
                    Our experienced team is here to help you grow your business to a new height. We guarantee to provide services at it’s best to help you convert your idea into a brand.
                </div>
            </div>
            <div className="cardList">
                <Card image={img1} title = "Web Development" description="Multi-Vendor E-commerce to Small Website, Payment Integration, API Integration, Domain Registration, Web Hosting, Website Maintenance, Website Redesign" />
                <Card image={img2} title = "Application Development" description="IOS/Android Apps, Multi-vendor E-commerce to Small Apps" />
                <Card image={img3} title = "Graphic Design" description="Logo Concept/Design, 2D/3D Graphics Design, Vector/Illustration, 2D/3D Mockups, Social Media Designs, UX/UI, Animation Concept/Designs." />
                <Card image={img4} title = "Digital Marketing" description="SEO, Social Media Marketing, Pay-Per-Click, Content Marketing, Email Marketing, Marketing Strategies" />
                <Card image={img5} title = "Blog" description="Get updated with latest news on our blogs and if you want you can also contribute  on our blog. Join Us by creating an account." />
                <Card image={img6} title = "Contact Support" description="We are available 24/7 at your service. Contact Us if you have any kind of queries." />
            </div>
        </div>
    </div>
  )
}

export default Services