import React from 'react'
import { Link } from 'react-router-dom'

const ProductPageWebsite = ({products}) => {
  return (
    <div>
      <h3 className='m-lg-5 '>Sản Phẩm</h3>
        <div className="album py-5 bg-body-tertiary">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        
          {products.map((product,index)=>(
                <div className='col' key={index}>
                   <div className="card shadow-sm">
                    <Link to={`/products/${product.id}`}><img  src={product.image} width="100%" height={250}></img>
                      <div className="card-body">
                        <p className="card-text">{product.name}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Xem Chi TIết </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                    </div>
                </div>
            ))}
      </div>
    </div>
  </div>

    </div>
  )
}

export default ProductPageWebsite