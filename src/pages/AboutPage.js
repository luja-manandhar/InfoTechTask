import {Link} from "react-router-dom";

const AboutPage = () => {
    return(
        <div className='pages'>
            <p>About Detail Page</p>
            <div>
                <Link to='/'>Go back</Link>
            </div>
        </div>
    )
}

export default AboutPage