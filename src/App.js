import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.js';

const spoonflowerRootUrl = `http://search.spoonflower.com/searchv2/designs`

class App extends Component {
  constructor() {
    super()
    this.state = {
      designsArray: [],
    };
  }

  componentDidMount() {
    fetch(spoonflowerRootUrl)
    .then(results => {
      return results.json();
    })
    .then(data => {
      let designsArray = data.results.map((row) => {
        return row
      })
      this.setState({designsArray: designsArray});
    })
  }

  render() {
    return (
      <div className="container">
        {this.state.designsArray.map(item =>
          <Card name={item.name}/>
        )}
      </div>
    );
  }
}

export default App;
