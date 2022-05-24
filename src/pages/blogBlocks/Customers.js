import cBadge1 from "../../assets/cbadge1.svg";
import cBadge2 from "../../assets/cbadge2.svg";
import cBadge3 from "../../assets/cbadge3.svg";
import cBadge4 from "../../assets/cbadge4.svg";
import React from "react";


const Customers = () => {
    return(
        <>
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
        </>
    )
}

export default Customers