import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/layout/Header';
import AddPost from './components/pages/AddPost';
import AllPosts from './components/pages/AllPosts';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <main>
            <Route exact path="/" render={props => (
              <section className="home wrapper">
                <h2>Hello there</h2>
                <p>If you like to read, you probably have many things to say about books. Either you have strong opinion about character, story or just want to save your favourite quote - epilogue is here for you! </p>
                <p>It's online book diary created for book lovers.</p>
                {/* <blockquote>"A reader lives a thousand lives before he dies. The man who never reads lives only one."</blockquote> */}
              </section>
            )} />
            <Route path="/addpost" component={AddPost} />
            <section className="wrapper allPosts">
              <Route path="/allposts" component={AllPosts} />
            </section>
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
