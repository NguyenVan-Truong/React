import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = ({products}) => {
  return (
    <div>
<main>
  <section className="py-5 text-center container">
    {/* <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Album example</h1>
        <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
          <a href="#" className="btn btn-primary my-2">Main call to action</a>
          <a href="#" className="btn btn-secondary my-2">Secondary action</a>
        </p>
      </div>
    </div> */}
    <img src="https://www.lovellsoccer.co.uk/features//NIke-Mercurial-360/Mercurial-360-2-Recovered_01a.jpg" alt="" width='1200px' />
    <h1 className='m-5 '>Sản Phẩm</h1>
  </section>
  
  <div className="album py-5 bg-body-tertiary">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {products.map((product,index)=>(
                <div className='col' key={index}>
                   <div className="card shadow-sm">
                    <Link to={`/products/${product.id}`}><img  src={product.image} width="100%" height={300}></img>
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
</main>

    </div>
  )
}

export default HomePage