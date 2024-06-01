import React from 'react'

const ProductArticle = ({contacs1}) => {
  return (
    <div >
        <img src={contacs1.icon} />
        <h1>{contacs1.title}</h1> 
        <h6>{contacs1.description}</h6>
    </div>
  )
}

export default ProductArticle