import { Link } from "react-router-dom";

const Comment = ({comment}) => {
    
    return (
        <div>
            <h2>
              Name :  {comment.name}
            </h2>
            <p>
                Body : {comment.body}
            </p>
            <Link to={`/comment/${comment.id}`}> Show Details</Link>
        </div>
    );
};

export default Comment;