import React, {useState, useContext} from 'react'

import {Context} from '../Context'


function Image({className, img}) {

    const [hover, setHover] = useState(false)
    const {toggleFavorite} = useContext(Context)
    const heartIcon = hover && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    const plusIcon = hover && <i className="ri-add-circle-line cart"></i>
           

    return (
        <div className={`${className} image-container`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
        <img src={img.url}  alt="" className="image-grid" />
        {heartIcon}
        {plusIcon}
        </div>
    )
}


export default Image