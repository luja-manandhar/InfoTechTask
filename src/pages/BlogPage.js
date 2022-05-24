import {Link} from "react-router-dom";

const BlogPage = () => {
    return(
        <div className='pages'>
            <p>Blog Detail Page</p>
            <div>
                <Link to='/'>Go back</Link>
            </div>
        </div>
    )
}

export default BlogPage