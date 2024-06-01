import React from 'react'
import  axios  from 'axios';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
const SignUp = () => {
const {register,handleSubmit}= useForm();
const onSubmit = async(data)=>{
    try {
        const response = await axios.post(`http://localhost:3000/signup`,data)
        console.log(response)
    } catch (error) {
        console.log("error",error)
    }
};

  return (
    <div>
       <main className="form-signin  ">
  <form onSubmit={handleSubmit(onSubmit)}>
    <h1 className="h3 text-xl-center mb-3 fw-normal">Xin Mời Đăng Ký</h1>
    <div className="form-floating">
      <input type="email" {...register('email')} className="form-control" id="floatingInput" placeholder="name@example.com" />
      <label htmlFor="floatingInput">Tên Tài Khoản</label>
    </div>
    <div className="form-floating">
      <input type="password"  {...register('password')} className="form-control" id="floatingPassword" placeholder="Password" />
      <label htmlFor="floatingPassword">Mật Khẩu</label>
    </div>
    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" defaultValue="remember-me" id="flexCheckDefault" />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Ghi Nhớ Mật Khẩu
      </label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Đăng Ký</button>
  </form>
  <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to="/signin">Đăng Nhập</Link>
</main>

    </div>
  )
}

export default SignUp