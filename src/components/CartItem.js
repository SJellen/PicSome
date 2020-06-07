import React, {useContext} from "react"
import {Context} from "../Context"



function CartItem({item}) {
    
    const {removeFromCart} = useContext(Context)
    
    function trashCan() {
        return <i className="ri-delete-bin-line" onClick={() => removeFromCart(item.id)}></i>
    }
    
    return (
        <div className="cart-item">
            {trashCan()}
            <img src={item.url} alt="" width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem