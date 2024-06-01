// import React from 'react'
// import  axios  from 'axios';
// import { useForm } from 'react-hook-form'
// import { Link } from 'react-router-dom'
const SignIn = () => {
// const {register,handleSubmit}= useForm();
// const onSubmit = async(Formdata)=>{
//     try {
//         const {data} = await axios.post(`http://localhost:3000/signin`,Formdata)
//         localStorage.setItem("user",JSON.stringify(data));
//     } catch (error) {
//         console.log("error",error.response.data);
//     }
// };
let btnLogin  = document.querySelector(".btn-login");
btnLogin?.addEventListener('click' , e=>{
    e.preventDefault();
        let user = document.querySelector('#txtuser');
        let pass = document.querySelector('#txtpass');
        if(user.value.trim()==""){
            alert("Bạn Chưa Nhập gì");
            user.focus();
            return false;
        }if(pass.value.trim()==""){
            alert("Bạn Chưa Nhập gì");
            pass.focus();
            return false;
        }
        fetch('http://localhost:3000/users/').then(res => res.json()).then(data => {
            if(checkLogin(data,user.value,pass.value)){
                alert('Bạn đã đăng nhập thành công');
                window.location.href='HomePage.jsx';
            }else{
                alert('Tài khoản hoặc mật không đúng');
            }
        }).catch(err=>console.log(err));
});

const checkLogin = function(data,user,pass){
    return data.some(dt =>{
        return dt.username == user && dt.password == pass;
    });
}

  return (
    <div>
       {/* <main className="form-signin  ">
  <form onSubmit={handleSubmit(onSubmit)}>
    <h1 className="h3 text-xl-center mb-3 fw-normal">Xin Mời Đăng Nhập</h1>
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
    <button className="btn btn-primary w-100 py-2" type="submit">Đăng Nhập</button>
  </form>
  <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to="/signup">Đăng Ký</Link>
</main> */}

      <div className="content">
        <form action>
          <input type="text" id="txtuser" />
          <input type="password" id="txtpass" />
          <input type="submit" defaultValue="Đăng Nhập" className="btn-login" />
        </form>
      </div>

    </div>

    
  )
}

export default SignIn