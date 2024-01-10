import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import PostList from "./components/PostList";
import SearchBar from "./components/SearchBar";
import posts from "./data/posts.json";
import { useState } from "react";

function App() {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  return (
    <>
      <header>
        <Nav />
        <Header />
        <SearchBar setFilteredPosts={setFilteredPosts} />
      </header>
      <main>
        <PostList filteredPosts={filteredPosts} />
        <Aside />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
