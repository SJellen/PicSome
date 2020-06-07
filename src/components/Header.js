import React, {useState, useContext} from "react"
import {Route, Link, Switch} from 'react-router-dom'
import Cart from "../pages/Cart"
import Photos from "../pages/Photos"
import {Context} from "../Context"

function Header() {
    const {cartItems} = useContext(Context)

    function headerCartIcon() {
   
        if(cartItems.length === 0) {
            return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        } else {
            return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
        }
    }


    return (
        <div>
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart">{headerCartIcon()}</Link>
        </header>
        
        <Switch>
        <Route path="/">
        <Photos />
        </Route>
        
        <Route path="/cart">
        <Cart />
        </Route>
        
        </Switch>
        </div>
    )
}

export default Header

