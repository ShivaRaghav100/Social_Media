import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import CreatPost from "./Components/CreatPost";
import Footer from "./Components/Footer";
import PostList from "./Components/PostList";
import { useState } from "react";
import PostListProvider from "./Store/Post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState('Home');
   return (
    <PostListProvider>
    <div className="app-contenier">
      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
      <div className="AapContenerChild">
        <Header></Header>
        {selectedTab === "Home" ? <PostList></PostList>:<CreatPost></CreatPost>}
        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  )
}

export default App
