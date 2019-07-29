import React, { Component } from "react";
import Logo from "../assets/logo.png";
import Nav from "./nav";
import footer from "../assets/footer.png";
import FooterNav from "./footerNav";
import { Link } from "react-router-dom";
import Modal from './Modal';

export default class FAQ extends Component {
  state = {
    modal: false
  }

  toggleModal = () => this.setState({modal: !this.state.modal})

  render() {
    return (
      <div className="FAQ">
        <Nav />
        <div className="yellowHead" />
        <img className="logo" src={Logo} alt="logo" />
        <div className="frontText">
          <p className="Welcome">Frequently Asked Questions</p>
          <p className="secondary">
            Have a question? You're in the right place.
          </p>
        </div>
        {this.state.modal ? <Modal toggleModal={this.toggleModal} /> : null}

        <div className="questions">
          <div className="whiteBox">
            <p className="headers">What is Sogol?</p>
            <p className="bodyText">
              Sogol is a place for people like you to find beautiful, unique
              logos at a fair price. We like to consider ourselves a
              middle-ground between the usual on-demand logo services and hiring
              a designer or agency for a fully custom logo. <br /> <br />
              On-demand logo services are typically low-quality and cheap. Their
              logos are created by non-professional designers trying to make a
              quick couple dollars that don't put the required time and effort
              to make something the right way.
              <br /> <br />
              On the other hand, a lot of people and companies can't afford to
              hire a designer or agency for completely custom work. This costs a
              lot of time, money, and patience.
              <br /> <br />
              That's where we come in. We upkeep a collection of curated,
              unique, and beautiful hand-made logos made from scratch available
              for purchase and use right now.
            </p>
          </div>

          <div className="secondWhiteBox">
            <p className="headers">What files are included in my purchase?</p>
            <p className="bodyText">
              You are provided with every logo format you'll ever need. Upon
              purchase, you will receive a package containing a 100% scalable
              vector Illustrator file, PNGs for easy application, a guide for
              your files, and a ZIP file to easily share your logo files with
              manufacturers, designers, developers, etc.
            </p>
          </div>

          <div className="thirdWhiteBox">
            <p className="headers">Can someone else buy the same logo?</p>
            <p className="bodyText">
              Nope! Once you purchase your logo, we forbid any other purchases
              of it and take the logo down from our website. Once purchased, you
              will be the only owner ever.
            </p>
          </div>

          <div className="fourthWhiteBox">
            <p className="headers">What do you mean by exclusive rights?</p>
            <p className="bodyText">
              Once purchased, we pass the rights for this logo off to you
              completely. You are then free to use the logo however you would
              like. If desired, you can even alter the logo in whatever way to
              fit your specific needs.
            </p>
          </div>

          <div className="fifthWhiteBox">
            <p className="headers">
              How do you know your logos are 100% unique?
            </p>
            <p className="bodyText">
              We are very careful about creating logos that are unique but still
              simple. We do our best to make sure there are no companies
              currently using a mark that could be confused with the ones we
              sell here. But, because of the nature of simplicity, there is of
              course still a chance of us overlooking something, although not
              very likely.
              <br /> <br />
              If any issues with this arise, we are happy to help get you a
              solution that still fits your needs. Although we can't provide
              refunds, we are happy to work with you to get a new logo from our
              selection that fits your needs. Please email us at
              contact@sogol.co if you need assistance.
            </p>
          </div>

          <div className="sixthWhiteBox">
            <p className="headers">Do you provide refunds or exchanges?</p>
            <p className="bodyText">
              Because of the nature of our products, we are unfortunately not
              able to provide refunds or exchanges. This protects the rights of
              the logo if others were to purchase the logo afterwards.
              <br />
              <br />
              However, If you would like to purchase a different logo after the
              one you bought, we can provide a small discount. If you are in
              this situation, feel free to email us at contact@sogol.co.
            </p>
          </div>
        <button className='FormButton' onClick={() => this.toggleModal()}>Submit feedback</button>

          <div className="footerBottom">
            <img className="footerImg" src={footer} alt="footsies" />
            <p className="head">Still Need Help?</p>
            <p className="bods">
              If your question wasn't answered here, no worries! Feel free to
              <br /> email us and we'll do our best to help.
            </p>
          </div>

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
              Designed and Developed by{" "}
              <span className="bleh">Denis Cortez</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
