import React, { Component } from 'react';
import './Card.css';

export class Card extends Component {

  render() {
    return (
      <a href="#" className="product-card">
        <div className="product-card-content">
          <img src={this.props.image} alt="Display of fabric" className="product-img"/>
          <div className="product-details-container">
            <h2 className="product-card-heading">{this.props.name}</h2>
            <p className="description">{this.props.description}</p>
          </div>
        </div>
      </a>
    );
  }
}

export default Card;
