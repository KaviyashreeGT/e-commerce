import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Electronic commerce, or e-commerce, is the buying and selling of 
            goods and services over the internet. E-commerce can be conducted
            on computers, tablets, smartphones, and other smart devices. Nearly 
            every imaginable product and service is now available through e-commerce,
            and it has upended how many companies and entire industries do business.</p>
        <p>E-commerce has helped companies (especially those with a narrow reach, 
            like small, local businesses) gain access to a wider market by providing 
            cheaper and more efficient sales and distribution channels for their products 
            or services.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
