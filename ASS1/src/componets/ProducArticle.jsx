import React from 'react'

const ProducArticle = ({contacs}) => {
  return (
    <div >
        <img src={contacs.icon} />
        <h1>{contacs.title}</h1> 
        <h6>{contacs.description}</h6>
    </div>
  )
}

export default ProducArticle