import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";

const Comments = () => {
    const comments = useLoaderData()
    return (
        <div>
            <h2>
                {comments.length}
            </h2>
            <div>
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment} clg></Comment> )
                }
            </div>
        </div>
    );
};

export default Comments;