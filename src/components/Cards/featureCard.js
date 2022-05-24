import './featureCard.css'
import {Link} from "react-router-dom";
import featureImage from '../../assets/featureImage.svg'

const featureCard = (props) => {
    return (
        <div className='featureCardContainer'>
            <div className="cardImage">
                <img src={featureImage} alt='serviceCard-img'/>
            </div>
            <div className="cardTitle">{props.title}</div>
            <div className="cardParagraph">{props.description}</div>
            <div className="featureCardLink"> <Link to='/'>Connect Now</Link></div>
        </div>
    )
}

export default featureCard