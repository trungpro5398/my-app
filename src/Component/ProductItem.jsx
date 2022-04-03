import React, { Component } from "react";

export default class ProductItem extends Component {
  state = {
    imgHeart: "/img/heart0.png",
    isClick: false,
  };
  handleClick = (isClick) => {
    console.log(isClick);
    if (isClick === false) {
      this.setState({
        imgHeart: "/img/heart.png",
        isClick: true,
      });
    } else {
      this.setState({
        imgHeart: "/img/heart0.png",
        isClick: false,
      });
    }
  };
  render() {
    return (
      <div className="item">
        <button
          className="heart"
          onClick={() => this.handleClick(this.state.isClick)}
        >
          <img src={this.state.imgHeart} alt="heart" />
        </button>
        <img src={this.props.image} alt="Shoe" className="shoe" />
        <p className="name">{this.props.name}</p>
        <p className="price">${this.props.price}</p>
      </div>
    );
  }
}
