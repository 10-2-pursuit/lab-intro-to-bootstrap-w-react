// importing post data
import postData from "./data/posts.json";

// importing images array
import images from "./images";

//Components
import Nav from "./components/common/Nav";
import Header from "./components/common/Header";
import Posts from "./components/posts/Posts";
import Footer from "./components/common/Footer";

function App() {
  console.log(postData);
  return (
    <main>
      <Nav />
      <Header />
      <Posts />
      <Footer />
    </main>
  );
}

export default App;
