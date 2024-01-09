import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import PostList from "./components/PostList";
import SearchBar from "./components/SearchBar";

import postData from "./data/posts.json";

function App() {
  return (
    <>
      <header>
        <Nav />
        <Header />
        <SearchBar />
      </header>
      <main>
        <PostList />
        <Aside />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
