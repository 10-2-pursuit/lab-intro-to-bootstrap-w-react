// importing post data
import postData from "./data/posts.json";

// importing images array
import images from "./images";

//Components
import Nav from "./components/common/Nav";
import Header from "./components/common/Header";

function App() {
  console.log(postData);
  return (
    <main>
      <Nav />
      <Header />
      <button className="btn">hi</button>
    </main>
  );
}

export default App;
