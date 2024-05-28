import { createContext, useReducer } from "react";
export const PostList = createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{}
})
const postListReducer =(currentPostList,action)=>{
    let newPostList =  currentPostList;
    if(action.type==="Delete_post"){
      console.log(5);
      newPostList=currentPostList.filter(
        (post)=>post.id !== action.payload.postId
      );
    }
    else if(action.type==="ADD_POST"){
      newPostList = [action.payload, ...currentPostList];
    }
    
    return newPostList
}
const PostListProvider =({children})=>{
  const [postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST)
  const addPost = (userId,title,body,reactions,tags)=>{
    console.log(title);
    dispatchPostList({
        type: "ADD_POST",
        payload:{
          id: Date.now(),
          title: title,
          body: body,
          reactions: reactions,
          userId: userId,
          tags: tags,
        },
      });
    };
    const deletePost = (postId)=>{
      
      dispatchPostList({
        type:"Delete_post",
        payload:{
          postId,
        },
      })
    };


    return <PostList.Provider value={{postList,addPost,deletePost}} >
        {children}
    </PostList.Provider>
}
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 2,
    m: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Paas ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];
  

export default PostListProvider;