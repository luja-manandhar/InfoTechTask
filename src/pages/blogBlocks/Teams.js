import person2 from "../../assets/person2.svg";
import React from "react";


const Teams = () => {
    return(
        <>
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
        </>
    )
}

export default Teams