import React, {Component} from 'react'
import { Link } from 'react-router-dom'


export default class LogoTile extends Component{

    render(){
        return(
            <Link to={"/products/" + this.props.logo.id} className="LogoTile">
                <img className="image" src={this.props.logo.url} alt="dumb"/>
                <p className= 'tile'>{this.props.logo.title}</p>
                <p className="descr"> {this.props.logo.short_description}</p>
                <button className='btn'>See Details</button>
            </Link>
        )
    }
}