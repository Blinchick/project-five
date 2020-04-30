import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import firebase from './firebase';
import './App.css';
import Postscripts from './components/Postscripts';
import Header from './components/layout/Header';
import WritePost from './components/pages/WritePost'

class App extends Component {
  constructor() {
    super();
    this.state = {
      postscript: ""
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const newState = [];
      const data = response.val();
      for (let key in data) {
        newState.push(data[key]);
      }
      this.setState({
        postscript: newState
      });
    });
  }

  render() {
    console.log(this.state)
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <h1>Hello hello hello</h1>
                {/* <Postscripts postscript={this.state.postscript} /> */}
              </React.Fragment>
            )} />
            <Route path="/writepost" component={WritePost} />
          
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
