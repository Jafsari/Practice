import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import circleci from './assets/circle.png'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { Text: false}
  }
  
  showText = (e) => {
    this.setState({Text:true});
    console.log(this.state.Text)
  }
  render() {
  const navBar = (this.state.Text ? (<div className="text">The shortest distance from idea to execution. Automate your development process quickly, safely, and at scale.</div> ): ( <div className="empty"></div>))
    return (
      <div className="App">
        <img className="icon" src ={circleci} alt ='' />
      <div>
        <button onClick={this.showText} className="button">Click me!</button>
        {navBar}
      </div>
      </div>
    );
  }
}

export default App;
