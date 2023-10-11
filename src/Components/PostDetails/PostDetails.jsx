import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData()
    
    return (
        <div>
            <h2>Post Id : {post.id}</h2>
            <h2>
                {post.title}
            </h2>
        </div>
    );
};

export default PostDetails;