import React, {useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"
import useHover from '../Hooks/useHover'


function CartItem({item}) {
    const [hover, ref] = useHover()
    const {removeFromCart} = useContext(Context)
  
    const iconClassName = hover ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    return (
        <div className="cart-item">
            <i 
                className={iconClassName}
                onClick={() => removeFromCart(item.id)}
                ref={ref}
            >
            </i>
            
            <img src={item.url} alt="" width="130px" />
            <p>$5.99</p>
        </div>
    )
}


CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem