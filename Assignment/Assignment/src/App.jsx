import { useEffect, useState } from 'react'
import ProductPage from './pages/Admin/Product'
import DashboardPage from './pages/Admin/dashboard'
import {Route, Routes} from 'react-router-dom'
import {getProducts, removeProductById, updateProduct} from './api/product';
import { ToastContainer , toast } from 'react-toastify'
import ProductAddPage from './pages/Admin/product-add'
import { addProduct } from './api/product'
import ProductEditPage from './pages/Admin/product-edit'
import LayoutAdmin from './components/layouts/LayoutAdmin'
import LayoutWebsite from './components/layouts/LayoutWebsite'
import ProductPageWebsite from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage'
import HomePage from './pages/HomePage'
import SignUp from './pages/Sign/SignUp';
import Signin from './pages/Sign/SignIn';
import About from './pages/about';


function App() {
  const [products, setProducts]= useState([]);
  useEffect(() =>{
    (async () =>{
      const data = await getProducts();
      setProducts(data);
    })();
  }, [])
  const onHandRemove = async (id) =>{
    const confirm = window.confirm('Bạn Có Chắc Chắn Không ?');
    if(confirm){
      try{
        await removeProductById(id)
        toast.success("Xoá Sản Phẩm Thành Công")
       setProducts( products.filter((product) => product.id !== id));
      }catch(error){
        toast.error("Không Xoá Được Sản Phẩm")
      }
    }  
  }

  const onHandleAdd = async(product)=>  {
    try{
      const data = await addProduct(product);
      toast.success('Thêm Sản Phẩm Thành Công');
      setProducts([...products,data])
    }catch(error){
      toast.error("Không Thêm Được Sản Phẩm")
    }
  };
  const onHandleUpdate = async(product)=>  {
    try{
       await updateProduct(product);
      toast.success('Cập nhật Sản Phẩm Thành Công');
      // setProducts([...products,data])
      products.map((item) => (item.id === product.id ? product: item));
    }catch(error){
      toast.error("Không Cập Nhật Được Sản Phẩm")
    }
  };
  return (
    <>
    <Routes>
        <Route path='/' element={<LayoutWebsite/>}>
          <Route index element={<HomePage products={products}/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='products' element={<ProductPageWebsite products={products}/>}/>
          <Route path='products/:id' element={<ProductDetailPage />}/>
          <Route path='signup' element={<SignUp/>}/>
        <Route path='signin' element={<Signin/>}/>
        </Route>
        
        
        <Route path='admin/' element={<LayoutAdmin/>}>
              <Route index element={<DashboardPage/>}/>
              <Route path="products" element={<ProductPage products={products} onRemove={onHandRemove}/>}/>
              <Route path='products/add' element={<ProductAddPage onAdd={onHandleAdd}/>}></Route>
              <Route path='products/:id/edit' element={<ProductEditPage onUpdate={onHandleUpdate}/>}></Route>
        </Route>
    </Routes>

    <ToastContainer/>
    </>
)}

export default App
