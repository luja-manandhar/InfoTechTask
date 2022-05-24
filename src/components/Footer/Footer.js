import react from 'react';
import {Link} from "react-router-dom";
import './Footer.css'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <section className='footerSubscription'>
                <div>
                    <p className='footerSubscriptionHeading'>
                        Join our newsletter
                    </p>
                    <p className='footerSubscriptionText'>
                        Sign up to stay updated with the latest insights, news, and more.
                    </p>
                </div>
                <div className='inputAreas'>
                    <form>
                        <input
                            className='footerInput'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <input className='subscribeButton' type="button" value='Subcribe'/>
                    </form>
                </div>
            </section>
            <div className='footerLinks'>
                <div className='footerLinkWrapper'>
                    <div className='footerLinkItems'>
                        <h2>Company</h2>
                        <Link to='/'>About Us</Link>
                        <Link to='/'>What we do</Link>
                        <Link to='/'>Contacts</Link>
                    </div>
                    <div className='footerLinkItems'>
                        <h2>Services</h2>
                        <Link to='/'>Web Design</Link>
                        <Link to='/'>App Development</Link>
                        <Link to='/'>Graphic Designing</Link>
                        <Link to='/'>Digital Marketing</Link>
                        <Link to='/'>SEO Optimization</Link>
                    </div>
                </div>
                <div className='footerLinkWrapper'>
                    <div className='footerLinkItems'>
                        <h2>Join</h2>
                        <Link to='/'>Careers at 101Infotech</Link>
                        <Link to='/'>Internships</Link>
                    </div>
                    <div className='footerLinkItems'>
                        <h2>Connect with Us</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='socialMedia'>
                <div className='socialMediaWrap'>
                    <small className='websiteRights'>InfoTech © 2021</small>
                    <small className='websiteRights'>privacy policy</small>
                </div>
            </section>
        </div>
    )
}

export default Footer