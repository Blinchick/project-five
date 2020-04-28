import React, { Component } from 'react';
import './App.css';
import Postscripts from './components/Postscripts';

class App extends Component {
  state = {
    postscript: [
      {
        id: 1,
        date: 'April 26, 2020',
        post: 'I read that and that'
      },

      {
        id: 2,
        date: 'April 27, 2020',
        post: 'I read this too'
      },

      {
        id: 3,
        date: 'April 28, 2020',
        post: 'And this'
      }
    ]
  }

  render() {
    console.log(this.state.postscript)
    return (
      <div className="App">
        <h1>Your postscripts are here</h1>
        <Postscripts postscript={this.state.postscript}/>
      </div>
    );
  }
}

export default App;