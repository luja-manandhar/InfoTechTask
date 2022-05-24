import React from 'react'
import './CSS/Blog.css'
import image1 from '../assets/projectImage1.svg'
import cBadge1 from '../assets/cbadge1.svg'
import cBadge2 from '../assets/cbadge2.svg'
import cBadge3 from '../assets/cbadge3.svg'
import cBadge4 from '../assets/cbadge4.svg'

const Blogs = () => {
  return (
    <div className='pages'>
          <div className="blogContainer">
                <div className="recentProject">
                      <div>
                            <img className="projectImage" src={image1} alt="Project Image"/>
                      </div>
                      <div className="projectDetail">
                            <div className="heading">- Our Recent <span className="blue">Project</span></div>
                            <div className="title">Danira’s  Dalmoth Company </div>
                            <div className="description">
                                  Danira’s is a brand of “Pushpanjali Spices and Food Products”is a premium manufacturer and supplier of innovative quality food products at competitive rate. Danira’s is a product which has been launched in most of the places in Nepal. It a product with perfect mixture of spices and namkeens.
                            </div>
                            <button className='blogButton'>View More</button>
                      </div>
                </div>
                <div className="ourCustomers">
                      <div className="customersContainer">
                            <div className="heading">- Our <span className="blue">Customers</span></div>
                            <div className="title">Our <span className="blue">Customers</span> Love Our Work</div>
                            <div className="description">
                                  But don't just take our word for it.
                            </div>
                      </div>
                      <div className="companyBadgeList">
                            <img src={cBadge1} alt=""/>
                            <img src={cBadge2} alt=""/>
                            <img src={cBadge3} alt=""/>
                            <img src={cBadge4} alt=""/>
                      </div>
                </div>
                <div className="Testimonials">
                      <div className="testimonialContainer">
                            <div className="heading">- Our <span className="blue">TESTIMONIALS</span></div>
                            <div className="title">What Our <span className="blue">Trustworthy</span> Client say</div>
                            <div className="imageList"></div>
                            <div className="description">
                                  But don't just take our word for it.
                            </div>
                            <div><span className="blue">Rahul Kalwar CEO (Danira's)</span></div>
                      </div>
                </div>
                <div className="Features">
                      <div className="featuresContainer">
                            <div className="heading">- Our <span className="blue">Features</span></div>
                            <div className="title">Our <span className="blue">Solution</span> For All Your Basic Needs</div>
                            <div className="description">
                                  But don't just take our word for it.
                            </div>
                            <div className="cardList">
                            </div>
                      </div>
                </div>
                <div className="Team">
                      <div className="teamContainer">
                            <div className="heading">- Our <span className="blue">Team</span></div>
                            <div className="title">Our <span className="blue">Core</span> member</div>
                            <div className="imageList"></div>
                            <div className="description">
                                  But don't just take our word for it.
                            </div>
                            <div><span className="blue">Rahul Kalwar CEO (Danira's)</span></div>
                      </div>
                </div>
                <div className="Tools">
                      <div className="toolsContainer">
                            <div className="title">Tools & <span className="blue">Technologies</span> That WE Use.</div>
                            <div className="heading">- WE MAKE IT HAPPEN</div>
                            <div className="description">
                                  But don't just take our word for it.
                            </div>
                      </div>
                      <div className="badgeList">
                            img
                      </div>
                </div>
          </div>
    </div>
  )
}

export default Blogs