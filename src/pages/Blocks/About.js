import React from 'react';
import '../CSS/About.css'
import img1 from '../../assets/img1.svg';
import img2 from '../../assets/img2.svg';
import img3 from '../../assets/img3.svg';
import img4 from '../../assets/img4.svg';

const About = () => {
  return (
      <div className="pages" id='About'>
          <div className='aboutMainContainer'>
              <div className="aboutDescription">
                  <div className="aboutHeader">
                      <span className='blue'>Movement</span> For Brand <span className='blue'>Digitization</span>
                  </div>
                  <div className="aboutSubtitle">
                      101 INFOTECH is an extension of your organization. You aren’t just another client.
                      You are a partner, and you deserve an experience that is comfortable and tailored to your needs. We are the team you deserve. We don’t claim to be the best in Nepal or Kathmandu, but we do our best and deliver what you need.
                  </div>
              </div>
              <div className="aboutContent">
                  <div className="aboutBadge">
                      <img src={img1} alt=""/>
                      <div className="aboutBadgeDescription">
                          <div className="aboutBadgeTitle">A Timeline You Set</div>
                          Stop feeling stuck. We only use month-to-month contracts.
                      </div>
                  </div>

                  <div className="aboutBadge">
                      <img src={img2} alt=""/>
                      <div className="aboutBadgeDescription">
                          <div className="aboutBadgeTitle">A Price That Fits You</div>
                          Hit goals with a customized strategy you can afford.
                      </div>
                  </div>

                  <div className="aboutBadge">
                      <img src={img3} alt=""/>
                      <div className="aboutBadgeDescription">
                          <div className="aboutBadgeTitle">A Team You Know and Trust</div>
                          Collaborate with our in-house team. We don’t outsource.
                      </div>
                  </div>

                  <div className="aboutBadge">
                      <img src={img4} alt=""/>
                      <div className="aboutBadgeDescription">
                          <div className="aboutBadgeTitle">A TimA Holistic Transformation of Your Businesseline You Set</div>
                          Enhance marketing, sales, and customer service efforts.
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default About