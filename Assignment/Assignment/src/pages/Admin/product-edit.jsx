import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {useNavigate,useParams} from 'react-router-dom'
import { getProductById } from '../../api/product';
const ProductEditPage = ({onUpdate}) => {
    const {id} = useParams();
    const {register,handleSubmit , reset,formState: { errors },} = useForm();
    const navigate = useNavigate();


    useEffect(()=>{
        (async ()=>{
            const data = await getProductById(id);
            reset(data);
        })()
    },[id])


    const onSubmit = (data) =>{
        onUpdate(data);
        navigate("/admin/products")
    };

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Cập Nhật Sản Phẩm</h1>
        </div>    
        <div className="mb-3 mt-5">
            <label htmlFor="productName" className="form-label">Tên Sản Phẩm</label>
            <input type="text" id='productName' {...register('name', { required: true})} className="form-control"  />
            {errors.name && errors.name.type == "required" && <span>Bắt buộc phải nhập</span>}
        </div>
        <div className="mb-3 ">
            <label htmlFor="productImage" className="form-label">Ảnh Sản Phẩm</label>
            <input type="text" {...register('image', { required: true})} id='productImage' className="form-control"  />
            {errors.image && errors.image.type == "required" && <span>Bắt buộc phải nhập</span>}
        </div>
        <div className="mb-3 ">
            <label htmlFor="productPrice" className="form-label">Giá Sản Phẩm</label>
            <input type="number" {...register('price', { required: true})} id='productPrice' className="form-control"  />
            {errors.price && errors.price.type == "required" && <span>Bắt buộc phải nhập</span>}
        </div>
        <div className="mb-3 ">
            <label htmlFor="productDesc" className="form-label">Mô Tả Sản Phẩm</label>
            <input  type="text" className="form-control" {...register('description', { required: true})}id="productDesc"></input>
            {errors.description && errors.description.type == "required" && <span>Bắt buộc phải nhập</span>}
        </div>
        <button type="submit" className="btn btn-primary">Cập Nhật</button>
        </form>              
    </div>
        

  )
}

export default ProductEditPage