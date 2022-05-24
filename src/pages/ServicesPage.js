import {Link} from "react-router-dom";

const ServicePage = () => {
    return(
        <div className='pages'>
            <p>Services Detail Page</p>
            <div>
                <Link to='/'>Go back</Link>
            </div>
        </div>
    )
}

export default ServicePage