import { useContext } from "react";
import { PostList } from "../Store/Post-list-store";
import { AiFillDelete } from "react-icons/ai";
import styles from "./Card.module.css";
const Card = ({post})=>{
    
    const {deletePost} =useContext(PostList);
    return(
        <div className="card" style={{width: "25rem"}}>
            <div className="card-body">
                <h5 className="card-title">{post.title}
                <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </span>
                </h5>

                <p className="card-text">{post.body}</p>
                {post.tags.map((tag) => (<span key={tag} className="badge text-bg-primary hashtag">{tag}</span>))}
                <div className="alert alert-success reactions" role="alert">This post has been reacted by {post.reactions} people.</div>
            </div>
        </div>
    )
}
export default Card;