import React, {Component} from 'react'
import Logo from '../assets/logo.png'
import Nav from './nav'
import intro from '../assets/intro.png'
import { Link } from 'react-router-dom'
import FooterNav from './footerNav'



export default class Home extends Component{




    render(){
        return(
            <div className="Home">
                 <Nav /> 
                <div className="yellowHead"></div>
                <Link to="/" ><img className="logo" src={Logo} alt="logo"/> </Link>
                <div className="frontText">
                    <p className="Welcome">Welcome to Sogol</p>
                    <p className="secondary">Hand crafted and on-demand logos for your ideas</p>
                    <Link to="/shop" ><button className="btn">Find Your Perfect Logo</button> </Link>
                </div>

                <div className="Branding">
                    <img className="img" src={intro} alt="intro"/>
                    <div className="paragraph">
                        <p className="head">Great Branding for Great Ideas</p>
                        <p className="body">Your idea deserves beautiful branding. Branding is more important than ever in this day and age and can make or break your business. At Sogol, we understand that not everyone can afford to hire a designer to create their branding. That is why we have created a set of unique, high-quality, hand-crafted logos that are available now at a fair price.</p>
                        <Link to="/shop"><button className="btn">Shop Logos</button></Link>

                    </div>
                </div>

                <div className="featured">
                    <p className="feat_logo">Featured Logos</p>
                    <p className="lag">LATEST AND GREATEST</p>
                <div className="imgsToClick">
                    <Link to="/products/12"> <img className="clickable" src="https://www.sogol.co/logos/drip-cup/drip-brand-photo.jpg" alt="dumb"/></Link>
                    <Link to="/products/4"><img className="clickable" src="https://www.sogol.co/logos/three-moons/moons-brand-photo.png" alt="dumb"/></Link>
                    <Link to="/products/1"><img className="clickable" src="https://www.sogol.co/logos/leaf-branch/branch-brand-photo.png" alt="dumb"/></Link>
                    <Link to="/products/5"><img className="clickable" src="https://www.sogol.co/logos/iced-whiskey/whiskey-brand-photo.jpg" alt="dumb"/></Link>
                   <Link to="/shop"><button className="bton">Shop Logos</button></Link>
                </div>
                </div> 
                <div className="footerTwo">
                    <Link to="/"><img className="logo_Foot" src={Logo} alt="dumb"/></Link>
                    <a href="mailto:contact@sogol.co">
                        <p className="email">contact@sogol.co</p>
                    </a>
                    <FooterNav className="footerNav"/>
                    <p className="quarry">&copy; 2016 QUARRY INC</p>
                    <p className="comp">A <span className="bleh">QUARRY</span> COMPANY</p>
                     <p className="dAndd">Designed and Developed by <span className="bleh">Denis Cortez</span></p> 
                </div>         
            </div>
        )
    }
}