import React, { Component } from 'react';

class ProductFilter extends Component {

  render() {
    return (
      <div className="product-filter">
        <input id="tag-input-field" className="input-field" type="text" name="tag-selector" ref="filter1" placeholder="Search by Term"/>
        <input type="submit" value="Search" onClick={() => { this.props.displayResults(this.refs.filter1.value) }} className="search-btn"/>
      </div>
    )
  }

}

export default ProductFilter;
