import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  productList = [
    {
      name: "AIR-MAX-270-BIG-KIDS",
      price: 190.233,
      image: "/img/shoe4.jpg",
    },
    {
      name: "KYRIE-FLYTRAP-II",
      price: 1500,
      image: "/img/shoe5.jpg",
    },
    {
      name: "HUSTLE-D-9-FLYEASE",
      price: 130.2,
      image: "/img/shoe7.jpg",
    },
    {
      name: "NIKE AIR MAX OKETO",
      price: 60,
      image: "/img/shoe2.jpg",
    },
    {
      name: "REVOLUTION 4 FLYEASE",
      price: 55,
      image: "/img/shoe3.jpg",
    },
    {
      name: "NIKE REVOLUTION 4",
      price: 45,
      image: "/img/shoe1.jpg",
    },
  ];
  renderProductList = () => {
    return this.productList.map((product, index) => {
      return (
        <ProductItem
          name={product.name}
          price={product.price}
          image={product.image}
        ></ProductItem>
      );
    });
  };
  render() {
    return <div className="list">{this.renderProductList()}</div>;
  }
}
