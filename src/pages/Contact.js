import React from 'react'
import './CSS/Contact.css'

const Contact = () => {
  return (
    <div className='pages'>
        <div className="contactMainContainer">
            <div className="contactContainer">
                <div className="heading">- Connect with Us</div>
                <div className="title">Make your <span className='blue'>dream project</span> on the best way possible.</div>
                <div className="description">Mean if he they been no hold mr. Is at much do made. Latter person am secure of estate genius at.</div>
            </div>
            <div className="contactForm">
                <form action="">
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='Password'/>
                    <input className='btn' type="button" value='Get Started'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact