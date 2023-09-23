
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Tagline from "./components/Tagline";
import PostList from "./components/PostList";

import postData from "./data/posts.json";
import "./index.css"



function App() {
  console.log(postData);
  return (
    <main>
        <Navbar/>
          <Tagline/>
        <div className="d-block p-5">
          <Searchbar/>
          <PostList postData={postData}/>
        </div>
    </main>
  );
}

export default App;
