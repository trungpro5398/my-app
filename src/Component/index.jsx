import React, { Component } from "react";
import ProductList from "./ProductList";

export default class Baitap extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h2>Nike</h2>
        </div>
        <div className="container">
          <ProductList />
        </div>
      </div>
    );
  }
}
