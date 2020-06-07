import React, {useContext, useState} from "react"
import {Context} from "../Context"



function CartItem({item}) {
    const [hover, setHover] =useState(false)
    const {removeFromCart} = useContext(Context)
  
    const iconClassName = hover ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    return (
        <div className="cart-item">
            <i 
                className={iconClassName}
                onClick={() => removeFromCart(item.id)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
            </i>
            
            <img src={item.url} alt="" width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem