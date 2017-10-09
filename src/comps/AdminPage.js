import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class AdminPage extends Component{

    render(){
        return(
            <div className="Admin">
            <p className="welcome">WELCOME TO THE ADMIN PAGE</p>
                <Link to='add'>
                <button className="btn">Add Logo</button>
                </Link>



            </div>
        )
    }
}