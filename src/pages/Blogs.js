import React from 'react'
import './CSS/Blog.css'
import Card from '../components/Cards/featureCard'
import image1 from '../assets/projectImage1.svg'
import cBadge1 from '../assets/cbadge1.svg'
import cBadge2 from '../assets/cbadge2.svg'
import cBadge3 from '../assets/cbadge3.svg'
import cBadge4 from '../assets/cbadge4.svg'
import person1 from '../assets/person1.svg'
import tools1 from '../assets/tools1.svg'
import tools2 from '../assets/tools2.svg'
import tools3 from '../assets/tools3.svg'
import tools4 from '../assets/tools4.svg'
import tools5 from '../assets/tools5.svg'
import tools6 from '../assets/tools6.svg'
import person2 from '../assets/person2.svg'


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
                      <div className="displayInSmallWidth">
                            <img src={cBadge1} alt=""/>
                      </div>
                </div>
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
                <div className="Features">
                      <div className="featuresContainer">
                            <div className="heading">- Our <span className="blue">Features</span></div>
                            <div className="title">Our <span className="blue">Solution</span> For All Your Basic Needs</div>
                            <div className="description">
                                  Whatever your digital needs, We will provide you the best services to grow your business
                            </div>
                            <div className="featuresCardList">
                                  <Card title="Mobile Development" description="We specialize in creating mobile apps for Windows, Android,  and ios. Our expertise is in developing data-driven, collaborative apps for consumers with insightful analytics.
"/>
                                  <div className='hideInSmallWidth'>
                                        <Card title="Graphic Designing" description="Good design is all about making other designers jealous. We provide you with a uniqueness in every masterpiece designs.
“You think, we design”
"/>
                                        <Card title="Digital Marketing" description="Even a useless thing holds a different value in the market. Marketing is no longer about the stuff that you make, but about stories
 you tell.
"/>
                                  </div>
                            </div>
                      </div>
                </div>
                <div className="Team">
                      <div className="teamContainer">
                            <div className="heading">- Our <span className="blue">Team</span></div>
                            <div className="title">Our <span className="blue">Core</span> member</div>
                            <div className="personImageList">
                                  <img className='mainImage' src={person2} alt=""/>
                            </div>
                            <div className="description" style={{width:"300px", flexDirection:"column", gap:"10px"}}>
                                  <p><span className="blue">Sagar Chettri</span></p>
                                  <p>Full stack developer</p>
                                  <p>"The greatest leader is not necessarily the one who does the greatest things. He is the one that gets people to do the greatest things.”</p>
                            </div>
                      </div>
                </div>
                <div className="Tools">
                      <div className="toolsContainer">
                            <div className="title">Tools & <span className="blue">Technologies</span> That WE Use.</div>
                            <div className="heading">- WE MAKE IT HAPPEN</div>
                            <div className="description" style={{textAlign:"left", paddingLeft: "50px" }}>
                                  101 Infotech utilizes high-quality technical tools such as WordPress, Laravel, CSS, Javascript, HTML My SQL, etc. in order to provide you better business solutions.
                            </div>
                      </div>
                      <div className="badgeList">
                            <div>
                                  <img src={tools1} alt="HTML"/>
                                  <img src={tools2} alt="React"/>
                            </div>
                            <div>
                                  <img src={tools3} alt="CSS"/>
                                  <img src={tools4} alt="Sass"/>
                            </div>
                            <div className="hideInSmallWidth">
                                  <img src={tools5} alt="JS"/>
                                  <img src={tools6} alt="PHP"/>
                            </div>
                      </div>
                </div>
          </div>
    </div>
  )
}

export default Blogs