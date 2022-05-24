import image1 from "../../assets/projectImage1.svg";
import React from "react";


const Recent = () => {
    return(
        <>
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
        </>
    )
}

export default Recent