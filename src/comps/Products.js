import React, { Component } from "react";
import Nav from "./nav";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import axios from "axios";
import shoppingCart from "../assets/shopping-cart.svg";
import award from "./../assets/award.svg";
import x from "../assets/X.svg";

import { connect } from "react-redux";
import { addToCart } from "../ducks/reducer";

class Products extends Component {
  constructor() {
    super();

    this.state = {
      info: [],
      showModal: false
    };
    this.moveToCart = this.moveToCart.bind(this);
    this.exit = this.exit.bind(this);
  }

  moveToCart() {
    // console.log(this.state.info.id)
    this.props.addToCart(this.state.info.id);
    this.setState({
      showModal: true
    });
    setTimeout(() => {
      // alert(this.state.showModal)
    }, 1000);
  }

  exit() {
    this.setState({
      showModal: false
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/products/" + this.props.match.params.id)
      .then(details => {
        // console.log(details.data[0])
        this.setState({
          info: details.data[0]
        });
      });
  }

  render() {
    return (
      <div className="Products">
        {this.state.showModal ? (
          <div className="addedToCart">
            <div className="addedBox">
              <img onClick={this.exit} className="x" src={x} alt="x" />
              <img className="award" src={award} alt="dumb" />
              <p className="addedText">ADDED TO CART</p>
              <Link to="/shop">
                <button className="buttonss">CONTINUE SHOPPING</button>
              </Link>
            </div>
          </div>
        ) : null}

        <Nav />
        <div className="yellowHead" />
        <Link to="/">
          {" "}
          <img className="logo" src={Logo} alt="logo" />{" "}
        </Link>

        <div className="header">
          <Link to="/cart">
            <img className="shopping" src={shoppingCart} alt="" />
          </Link>

          <p className="titlee">{this.state.info.title}</p>
          <p className="description">{this.state.info.description}</p>
          <button className="button" onClick={this.moveToCart}>
            Add To Cart
          </button>
          <div className="yellowheadTwo" />
          <img className="imgs" src={this.state.info.url1} alt="" />
          <img className="imgs" src={this.state.info.url2} alt="" />
          <img className="imgs" src={this.state.info.url3} alt="" />
        </div>

        <div className="bottomPortion">
          <p className="title">Details</p>
          <p className="para">
            This logo was created by Dennis Cortés, a full-time, professional
            designer and illustrator. This logo was hand-crafted in a very
            intentional and strategic way to fit the needs and standards of
            today's industries. You can be confident this logo's elements and
            quality will represent your idea the way it deserves, we promise.
          </p>

          <div className="whatYouGet">
            <p>What You'll Get</p>
            <ul className="dumb">
              <li>Exclusive rights to this logo forever</li>
              <li>Every logo file you will ever need including:</li>
              <ul className="ul">
                <li>Black and white, 100% scalable vector file</li>
                <li>
                  Guide for use and ZIP file for easy sharing with designers,
                  developers, and manufacturers
                </li>
                <li>Various image sizes for easy application</li>
              </ul>
            </ul>

            <div className="btnArea">
              <p className="num">$249</p>
              <button className="btn" onClick={this.moveToCart}>
                Add To Cart
              </button>
            </div>

            <p className="note">
              NOTE: For your security, you will be sent to Plasso.co to finish
              purchase and download your files ♥
            </p>
          </div>
        </div>

        <div className="footer" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(
  mapStateToProps,
  { addToCart }
)(Products);
