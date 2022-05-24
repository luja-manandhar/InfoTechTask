import './serviceCard.css'
import {Link} from "react-router-dom";

const serviceCard = (props) => {
    return (
        <div className='cardContainer'>
            <div className="cardImage">
                <img src={props.image} alt='serviceCard-img'/>
            </div>
            <div className="cardTitle">{props.title}</div>
            <div className="cardParagraph">{props.description}</div>
            <div className="cardLink"> <Link to='/'>Read More</Link></div>
        </div>
    )
}

export default serviceCard