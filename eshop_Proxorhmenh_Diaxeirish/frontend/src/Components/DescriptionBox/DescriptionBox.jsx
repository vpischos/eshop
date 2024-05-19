import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="description-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>This is an ecommerse website made as an exercise for the university of thessaly</p>
            <p>It was developed in the subject of advanced data management</p>
        </div>
    </div>
  )
}

export default DescriptionBox
