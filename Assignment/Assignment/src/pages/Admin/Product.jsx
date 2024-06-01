import React from 'react'
import { Link } from 'react-router-dom'

const ProductPage = ({products , onRemove}) => {
  return (
    <>
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">Quản Lý Sản Phẩm</h1>
      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group me-2">
          <Link to="/admin/products/add"  className="btn btn-sm btn-outline-secondary">Thêm Sản Phẩm </Link>
        </div>
      </div>
    </div>    
    <div className="table-responsive small">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Ảnh</th>
            <th scope="col">Tên Sản Phẩm</th>
            <th scope="col">Giá Sản Phẩm</th>
            <th scope="col">Mô Tả Sản Phẩm</th>
            
            <th scope="col"> Thao Tác</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product , index) =>(
            <tr key={index}>
              <td>{index + 1}</td>
              <td ><img src={product.image} alt={product.name}width="60px" height="50"></img></td>
              <td><h4>{product.name}</h4></td>
              <td><span>{product.price}</span></td>
              <td><span>{product.description}</span></td>
              <div className='d-flex '>
              <td><button className='btn btn-danger m-2 ' onClick={() => onRemove(product.id)}>Xóa</button></td>
              <td><Link to={`/admin/products/${product.id}/edit`} className='btn btn-primary ml-5 m-2 '>Cập Nhật</Link></td>
              </div>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div></>
  )
}

export default ProductPage