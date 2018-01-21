import React, { Component } from 'react';
import './Card.css';

export class Card extends Component {

  render() {
    return (
      <div className="card-box">
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default Card;
