import Card from "./Card";
import { PostList as postListData } from "../Store/Post-list-store";
import { useContext } from "react";

const PostList =()=>{
    const {postList} = useContext(postListData);

    return(
        <div className="body">
            {postList.map((post)=>(
                <Card key={post.id} post={post} />
            ))}
        </div>
    )
}
export default PostList;