import { useLoaderData } from "react-router-dom";

const CommentDetails = () => {
    const commentDetails = useLoaderData()
    return (
        <div>
            <h2>
                Comment Details Id : {commentDetails.id}
            </h2>
            <p>
                {
                    commentDetails.body
                }
            </p>
        </div>
    );
};

export default CommentDetails;