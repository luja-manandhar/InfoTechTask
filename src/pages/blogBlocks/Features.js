import Card from "../../components/Cards/featureCard";
import React from "react";


const Features = () => {
    return(
        <>
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
        </>
    )
}

export default Features