import person1 from "../../assets/person1.svg";
import React from "react";


const Testimonials = () => {
    return(
        <>
            <div className="Testimonials">
                <div className="testimonialContainer">
                    <div className="heading">- Our <span className="blue">TESTIMONIALS</span></div>
                    <div className="title">What Our <span className="blue">Trustworthy</span> Client say</div>
                    <div className="personImageList">
                        <img className='sideImage2' src={person1} alt=""/>
                        <img className='sideImage1' src={person1} alt=""/>
                        <img className='mainImage' src={person1} alt=""/>
                        <img className='sideImage1' src={person1} alt=""/>
                        <img className='sideImage2' src={person1} alt=""/>
                    </div>
                    <div className="description" >
                        “I will admit - originally the thought of outsourcing scared the hell out of me. As a business owner, I am used to controlling and always having my finger on the pulse of my employees and contractors. 101infotech has delivered great results and has convinced me of the value of outsourcing. There were times when it was difficult to communicate but after some time or so everything starts to come together.”
                    </div>
                    <div className='description'><span className="blue">Rahul Kalwar CEO (Danira's)</span></div>
                </div>
            </div>
        </>
    )
}

export default Testimonials