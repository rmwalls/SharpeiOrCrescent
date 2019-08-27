import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <div className="jumbotron">
        <h1 className="display-4">Let's Play a Game!</h1>
        <p className="lead">Click on the images, score points by not clicking the same image twice</p>
        <hr className="my-4">
        <p>This is just some more text</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
    </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default App;
