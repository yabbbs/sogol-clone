import React, { Component } from "react";
import Logo from "../assets/logo.png";
import Nav from "./nav";
import { Link } from "react-router-dom";
import LogoTile from "./LogoTile";
import axios from "axios";
import shopping_cart from "../assets/shopping-cart.svg";
import FooterNav from "./footerNav.js";

export default class FAQ extends Component {
  constructor() {
    super();

    this.state = {
      logos: [
        {
          name: "",
          description: "",
          url: ""
        }
      ]
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/products")
      .then(res => {
        console.log(res);
        this.setState({
          logos: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const allLogos = this.state.logos.map((currentLogo, i) => {
      return <LogoTile key={i} logo={currentLogo} />;
    });

    return (
      <div className="ShopLogo">
        <Nav />
        <div className="yellowHead" />
        <Link to="/">
          {" "}
          <img className="logo" src={Logo} alt="logo" />{" "}
        </Link>
        <div className="frontText">
          <p className="Welcome">What Your Idea Deserves</p>
          <p className="secondary">Meticulously crafted logos just for you</p>
          <div className="second-headers">
            <p className="head">Pricing & Exclusivity</p>
            <p className="body">
              Good design is expensive, bad design will make you bankrupt. Let
              us help you get what your idea deserves. Each logo is just $249
              and comes with every file you'll ever need. <br />
              <br /> Every logo here can only be bought once. Once you purchase,
              you alone get exclusive rights to it. You can do whatever you wish
              with them: add color, alter the shape, add type, etc.{" "}
            </p>
          </div>
        </div>
        <div className="availableLogo">
          <Link to="cart">
            <img className="shopping" src={shopping_cart} alt="dumb" />
          </Link>

          <p className="head">Available Logos</p>
          <div className="logoArea">
            {allLogos}
            <a href="/api/auth">
              <p className="login">Are you an Admin? Log in here!</p>
            </a>
          </div>
        </div>

        {/* <div className="footer"></div>  */}
        <div className="footerTwo">
          <Link to="/">
            <img className="logo_Foot" src={Logo} alt="dumb" />
          </Link>
          <a href="mailto:contact@sogol.co">
            <p className="email">contact@sogol.co</p>
          </a>
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
