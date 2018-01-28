import React, { Component } from 'react';

class ProductFilter extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="product-filter">
        <input id="tag-input-field" className="input-field" type="text" name="tag-selector" placeholder="Search by Term"/>
        <input type="submit" value="Search" onclick="searchByInputs()" className="search-btn"/>
      </div>
    )
  }

}

export default ProductFilter;
