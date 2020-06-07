import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import {Context} from '../Context'


function Image({className, img}) {

    const [hover, setHover] = useState(false)
    const {toggleFavorite} = useContext(Context)
    const {addToCart} = useContext(Context)


    function heartIcon() {
        if(img.isFavorite) {
           return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hover){
          return  <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>   
        }
    }

    
    const plusIcon = hover && <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    

    return (
        <div className={`${className} image-container`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
        <img src={img.url}  alt="" className="image-grid" />
        {heartIcon()}
        {plusIcon}
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