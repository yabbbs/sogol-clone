import React, { Component } from "react";
import Logo from "../assets/logo.png";
import Nav from "./nav";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { checkOut, removeFromCart } from "../ducks/reducer";
import CartProduct from "./Cart_Product";
import FooterNav from "./footerNav";
import StripeCheckout from "react-stripe-checkout";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: false
    };
    this.onToken = this.onToken.bind(this);
  }

  componentDidMount() {
    console.log(this.props.cart);
  }

  onToken(token) {
    console.log(token);
  }

  render() {
    const total = this.props.cart.length * 249;
    const bought = this.props.cart.map((carty, i) => {
      return (
        <CartProduct
          key={i}
          id={carty}
          removeFromCart={this.props.removeFromCart}
        />
      );
    });

    return (
      <div className="Cart">
        <Nav />
        <div className="yellowHead" />
        <Link to="/">
          {" "}
          <img className="logo" src={Logo} alt="logo" />{" "}
        </Link>
        <div className="cart_box">
          {bought}
          <p className="total">TOTAL: ${total}</p>
          <StripeCheckout
            className="btn"
            token={this.onToken}
            stripeKey="pk_test_US6VcPMEOdKnD1ibZRqTfVGM"
          />
        </div>

        <div className="footerTwo">
          <img className="logo_Foot" src={Logo} alt="dumb" />
          <p className="email">contact@sogol.co</p>
          <FooterNav className="" />
          <p className="quarry">&copy; 2016 QUARRY INC</p>
          <p className="comp">
            A <span className="bleh">QUARRY</span> COMPANY
          </p>
          <p className="dAndd">
            Designed and Developed by <span className="bleh">Denis Cortez</span>
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(
  mapStateToProps,
  { checkOut, removeFromCart }
)(Cart);
