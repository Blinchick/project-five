import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/layout/Header';
import AddBook from './components/pages/AddBook';
import AllPosts from './components/pages/AllPosts';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     postscript: ""
  //   }
  // }

  // componentDidMount() {
  //   const dbRef = firebase.database().ref();

  //   dbRef.on('value', (response) => {
  //     const newState = [];
  //     const data = response.val();
  //     for (let key in data) {
  //       newState.push(data[key]);
  //     }
  //     this.setState({
  //       postscript: newState
  //     });
  //   });
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <main>
            <Route exact path="/" render={props => (
              <section>
                <h1>Hello hello hello</h1>
                <p>If you like to read, you probably have many things to say about books. Either you have strong opinion about character, story or just want to save your favourite quote - epilogue is here for you! </p>
                <p>It's online book diary created for book lovers.</p>
                <p>"A reader lives a thousand lives before he dies. The man who never reads lives only one."</p>
              </section>
            )} />
            <Route path="/addBook" component={AddBook} />
            <Route path="/allposts" component={AllPosts} />
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
