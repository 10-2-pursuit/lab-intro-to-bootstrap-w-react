import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import Sidebar from './components/SideBar';
import Footer from './components/Footer';
import postsData from './data/posts.json';
import TravelQuotes from './components/TravelQuotes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import PopularPosts from './components/PopularPosts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; 
function App() {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [locationCounts, setLocationCounts] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [popularPosts, setPopularPosts] = useState([]);
  const [displayPopular, setDisplayPopular] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Initialize posts with data from postsData and add popularity property
    const data = postsData.map((post) => ({
      ...post,
      popularity: 0,
    }));

    const counts = getLocationCounts(data);

    setPosts(data);
    setFilteredPosts(data);
    setLocationCounts(counts);
  }, []);

  const [posts, setPosts] = useState([]);

  const getLocationCounts = (data) => {
    const counts = {};
    data.forEach((post) => {
      const location = post.location;
      counts[location] = counts[location] ? counts[location] + 1 : 1;
    });
    return counts;
  };

  const handleSearch = (event) => {
    const searchQuery = event.target.value ? event.target.value.toLowerCase() : '';
  
    const filteredPosts = posts.filter((post) => {
      const { title, location, content } = post;
      return (
        title.toLowerCase().includes(searchQuery) ||
        location.toLowerCase().includes(searchQuery) ||
        content.toLowerCase().includes(searchQuery)
      );
    });
  
    setSearchQuery(searchQuery);
  
    if (filteredPosts.length === 0) {
      console.log(`No posts found with the search term "${searchQuery}"`);
    }
  
    setFilteredPosts(filteredPosts);
  };
  
  const handlePopularPostClick = (postId) => {
    if (!popularPosts.includes(postId)) {
      setPopularPosts((prevPopularPosts) => [...prevPopularPosts, postId]);
    }
  };

  const handleDisplayPopularPosts = () => {
    setDisplayPopular(true);
  };

  const handleHidePopularPosts = () => {
    setDisplayPopular(false);
    setSearchQuery('');
    setFilteredPosts(posts);
  };

  const onReadMoreClick = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              popularity: expanded ? post.popularity : post.popularity + 1,
            }
          : post
      )
    );
    setExpanded(expanded);
  };

  const onReadLessClick = () => {
    setExpanded(false);
  };

  function renderContent(post) {
    return expanded ? post.content : post.content.substring(0, 150);
  }

  return (
    <div className="App">
      <Router>
        <div>
          <Header
            handlePopularPostClick={handlePopularPostClick}
            displayPopular={displayPopular}
            handleDisplayPopularPosts={handleDisplayPopularPosts}
            handleHomeClick={handleHidePopularPosts}
          />
          <TravelQuotes />
          <Routes>
            <Route path="/" element={<PostContainer />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/popular"
              element={
                <PopularPosts
                  popularPosts={popularPosts}
                  expanded={expanded}
                  onReadMoreClick={onReadMoreClick}
                  onReadLessClick={onReadLessClick}
                  renderContent={renderContent}
                />
              }
            />
          </Routes>
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-6">
                      <SearchBar handleSearch={handleSearch} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      {filteredPosts &&
                        filteredPosts.length > 0 && (
                          <PostContainer
                            posts={filteredPosts.slice(
                              0,
                              filteredPosts.length / 2
                            )}
                            onPopularPostClick={handlePopularPostClick}
                          />
                        )}
                    </div>
                    <div className="col-lg-6">
                      {filteredPosts &&
                        filteredPosts.length > 0 && (
                          <PostContainer
                            posts={filteredPosts.slice(
                              filteredPosts.length / 2
                            )}
                            onPopularPostClick={handlePopularPostClick}
                          />
                        )}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <Sidebar locationCounts={locationCounts} />
                </div>
              </div>
              {filteredPosts.length === 0 &&searchQuery.length > 0 && (
                <div className="alert alert-warning mt-3" style={{ textAlign: 'center', color: 'red' }}>
                No posts found with the search term "{searchQuery}" were found.
                </div>
                  )}
            </div>
          </main>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
