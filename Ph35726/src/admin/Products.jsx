import React from 'react'
import { Link } from 'react-router-dom';
const Products = ({products , removeProducts}) => {
  return (
    <div>
<div>
  <div className="container-fluid">
    <div className="row">
<header>
  <div className="px-3 py-2 text-bg-dark border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
          <button type="button" className="btn btn-light text-dark me-2">Login</button>
          <button type="button" className="btn btn-primary">Sign-up</button>
        </ul>
      </div>
    </div>
  </div></header>
      <main >
        <h2>San pham</h2>
        <div className="table-responsive small">
          <Link to="/products/add" >Them san pham</Link>
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Ten </th>
                <th scope="col">Gia</th>
                <th scope="col">Anh</th>
                <th scope="col">Thao Tac</th>
              </tr>
            </thead>
            <tbody>
                {products?.map((item ,index)=>(
                  <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td><img src={item.image} width={50} /></td>
                  <td><Link to={`/products/${item.id}/edit`} className="btn btn-light text-dark me-2">Cap Nhat</Link>
                       <button type="button" className="btn btn-primary" onClick={()=> removeProducts(item.id)}>Xoa</button></td>
                </tr>
                ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
</div>

    </div>
  )
}

export default Products