import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './comps/Home'
import FAQ from './comps/FAQ'
import Shop from './comps/ShopLogos'
import Products from './comps/Products'
import Login from './comps/Login'
import AdminPage from './comps/AdminPage'
import Add from './comps/Add'
import Cart from './comps/Cart'


export default (
    
    <Switch>
        <Route component={Home} path="/" exact/>
        <Route component={FAQ} path="/FAQ" />
        <Route component={Shop} path="/shop" />
        <Route component={Products} path="/products/:id"/>
        <Route component={Login} path="/LoginPage"/> 
        <Route component={AdminPage} path="/admin"/>
        <Route component={Add} path="/add"/>
        <Route component={Cart} path="/cart"/>
    </Switch>
)