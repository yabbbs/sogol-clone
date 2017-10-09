import React from 'react';
import {Link} from 'react-router-dom';




export default function Nav(){
    return(
        <div className="footerNav">
            <Link className="home" to="/">Home</Link>
            <Link className="FAQ" to="/FAQ">FAQ</Link>
            <Link className="Shop" to="/shop">Shop Logos</Link>
        </div>
    )
}