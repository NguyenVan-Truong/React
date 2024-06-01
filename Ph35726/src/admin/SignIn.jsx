
import React from 'react'
import  axios from 'axios';
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
const SignIn = () => {
  const {register,handleSubmit,formState: { errors },} = useForm();
    const navigate = useNavigate();
    const onSubmit = async(user) =>{
       try {
        const {data } = await axios.post(`http://localhost:3000/signin`,user);
        localStorage.setItem('user',JSON.stringify(data));
        alert('dang nhap thanh cong');
        navigate("/products")
       } catch (error) {
        
       }
    };
  return (
    <div className='container'>

  <form onSubmit={handleSubmit(onSubmit)}>
  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dang nhap</h1>
        </div>    
        <div className="mb-3 mt-5">
            <label htmlFor="productName" className="form-label">tai khoan</label>
            <input type="email" id='productName' {...register('email', { required: true})} className="form-control"  />
            {errors.email && errors.email.type == "required" && <span>Bắt buộc phải nhập</span>}
        </div>
        <div className="mb-3 ">
            <label htmlFor="productImage" className="form-label">password</label>
            <input type="password" {...register('password', { required: true})} id='productImage' className="form-control"  />
            {errors.password && errors.password.type == "required" && <span>Bắt buộc phải nhập</span>}
        </div>
       
        <button type="submit" className="btn btn-primary">them</button>
  </form>

    </div>
  )
}

export default SignIn