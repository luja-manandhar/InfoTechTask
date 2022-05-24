import tools1 from "../../assets/tools1.svg";
import tools2 from "../../assets/tools2.svg";
import tools3 from "../../assets/tools3.svg";
import tools4 from "../../assets/tools4.svg";
import tools5 from "../../assets/tools5.svg";
import tools6 from "../../assets/tools6.svg";
import React from "react";


const Tools = () => {
    return(
        <>
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
        </>
    )
}

export default Tools