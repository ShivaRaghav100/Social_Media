
import { useContext, useRef } from "react";
import { PostList } from "../Store/Post-list-store";

const CreatPost = ()=> {
 
    const{addPost}=useContext(PostList);

    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement  = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();
     
    const PostSubmitHandlar =(e)=>{
        e.preventDefault();
        const userId =userIdElement.current.value;
        const title =postTitleElement.current.value;
        const body =postBodyElement.current.value;
        const reactions =reactionsElement.current.value;
        const tags =tagsElement.current.value.split(' ');

        userIdElement.current.value = "";
        postTitleElement.current.value = "";
        postBodyElement.current.value = "";
        reactionsElement.current.value = "";
        tagsElement.current.value = "";
        addPost(userId,title,body,reactions,tags);
    }
    return(
        <form className="form" onSubmit={PostSubmitHandlar} >
            <div className="mb-3">
                <label htmlFor="userId" className="form-label"> Enter your User Id here</label>
                <input type="text" className="form-control" id="userId" placeholder="Your User Id" ref={userIdElement}/>                
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" placeholder="How are you feeling today..." ref={postTitleElement}/>                
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea row="4" type="text" className="form-control" id="body" placeholder="Tell us more about it" ref={postBodyElement}/>                
            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Number of reactions</label>
                <input type="text" className="form-control" id="reactions" placeholder="How many people reacted to this post" ref={reactionsElement}/>                
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
                <input type="text" className="form-control" id="tags" placeholder="Please enter tags using space" ref={tagsElement}/>                
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    )
}
export default CreatPost;