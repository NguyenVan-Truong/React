import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/product';


const ProductDetailPage = () => {
  const [product,setProduct]= useState({})
  const {id} = useParams();
  useEffect(()=>{
    (async ()=>{
        const data = await getProductById(id);
        setProduct(data)
    })()
},[id])
  return (
   
    <div>
        <div className="product-container">
      <div className="product-info">
      <img src={product.image} alt="Product Image" className="product-image" />
        <h1 >{product.name}</h1>
        <p>Giá : {product.price}</p>
        <div className="product-description">
          <p><strong>Mô Tả:</strong> {product.description}</p>
        </div>
        <a href="#">Mua ngay</a>
      </div>
    </div>

    </div>
  )
}

export default ProductDetailPage