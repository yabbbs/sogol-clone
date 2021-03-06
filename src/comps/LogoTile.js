import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LogoTile extends Component {
  render() {
    return (
      <Link to={"/products/" + this.props.logo.id} className="LogoTile">
        <img className="image" src={this.props.logo.url} alt="" />
        <p className="tile">{this.props.logo.id}</p>
        <button className="btn">See Details</button>
      </Link>
    );
  }
}
