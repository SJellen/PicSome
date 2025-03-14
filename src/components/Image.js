import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {Context} from '../Context'
import useHover from '../Hooks/useHover'


function Image({className, img}) {

    const [hover, ref] = useHover()
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)
    


    function heartIcon() {
        if(img.isFavorite) {
           return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hover){
          return  <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>   
        }
    }

    function cartIcon() {
        const inCart = cartItems.some(item => item.id === img.id)
        if(inCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if (hover) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }


    } 

    
   
    

    return (
        <div className={`${className} image-container`}
        ref={ref}
        >
        <img src={img.url}  alt="" className="image-grid" />
        {heartIcon()}
        {cartIcon()}
        </div>
    )
}


Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
     id:   PropTypes.string.isRequired, 
     url:  PropTypes.string.isRequired, 
     isFavorite: PropTypes.bool
        })
}


export default Image