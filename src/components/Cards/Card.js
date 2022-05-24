import './Card.css'
import {Link} from "react-router-dom";

const card = (props) => {
    return (
        <div className='cardContainer'>
            <div className="cardImage">
                <img src={props.image} alt='card-img'/>
            </div>
            <div className="cardTitle">{props.title}</div>
            <div className="cardParagraph">{props.description}</div>
            <div className="cardLink"> <Link to='/'>Read More</Link></div>
        </div>
    )
}

export default card