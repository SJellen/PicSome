import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CartItem from '../components/CartItem'

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const {cartItems, emptyCart} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ))

    const total = (cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})

    function placeOrder() {
        setButtonText("Ordering....")
        setTimeout(() => {
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }


    return (
        <main className="cart-page">
            <h1>Check out</h1>
           {cartItemElements}
           <p className="total-cost">Total: {total} </p>
           {
               cartItems.length ? <div className="order-button"><button onClick={placeOrder}>{buttonText}</button></div> : <p>Your cart is empty</p>
            }
            
        </main>
    )
}

export default Cart