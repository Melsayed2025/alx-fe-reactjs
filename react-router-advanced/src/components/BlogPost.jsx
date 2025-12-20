import { useParams } from "react-router-dom";

export default function BlogPost() {
    const { postId } = useParams();

    return (   
        <div>
            <h1>Blog Post Page</h1>
            <p>Displaying blog post with ID: {postId}</p>
        </div>
    );
}