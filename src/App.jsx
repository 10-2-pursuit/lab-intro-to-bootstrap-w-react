import postData from "./data/posts.json";
import React from "react";
import DisplayPosts from "./Components/DisplayPosts";
// import DisplayPosts from "./Components/DisplayPosts";
import Nav from "./Components/Nav";
// // import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PostsByLocation from "./Components/PostsByLocation"

function App() {
  // console.log(postData);
  return (
    <>
    <Nav />
    <Header /> 
    <DisplayPosts />
    <PostsByLocation />
    {/* <Footer /> */}
    



    </>
  );
}

export default App;
