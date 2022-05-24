import {Link} from "react-router-dom";

const ContactPage = () => {
    return(
        <div className='pages'>
            <p>Contact Detail Page</p>
            <div>
                <Link to='/'>Go back</Link>
            </div>
        </div>
    )
}

export default ContactPage