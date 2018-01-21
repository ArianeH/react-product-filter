import React, { Component } from 'react';
import './Card.css';

export class Card extends Component {

  render() {
    return (
      <div className="product-card">
        <div className="product-card-content">
          <img src={this.props.image} alt="Display of fabric" className="product-img"/>
          <h2 className="product-card-heading">{this.props.name}</h2>
          <p className="description">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Card;
