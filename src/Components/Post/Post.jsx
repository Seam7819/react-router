import { Link } from 'react-router-dom';

const Post = ({post}) => {
    
    const {id,title} = post;

    return (
        <div>
            <h2>
            Post id : {id}
            </h2>
            <p>
                {title}
            </p>
            <Link to={`/post/${id}`}>Show Details</Link>
        </div>
    );
};

export default Post;