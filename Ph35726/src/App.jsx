import { useState ,useEffect } from 'react';
import {Routes,Route} from 'react-router-dom'
import Products from './admin/Products';
import ProductsAdd from './admin/Products_Add';
import ProductsEdit from './admin/Products_Edit';
import SignUp from './admin/SignUp';
import SignIn from './admin/SignIn';
import axios from 'axios';
function App() {
const [products,setproducts]= useState()
  useEffect(()=>{
    (async()=>{
      const {data} = await axios.get(` http://localhost:3000/products`);
      setproducts(data)
    })()
  },[])

  const onHandleRemove = async(id)=>{
    try {
      const confirm = window.confirm(' ban cos chac chan ko ?');
      if(confirm){
        await axios.delete(` http://localhost:3000/products/${id}`);
        alert('ban da xoa thanh cong ')
        setproducts( products.filter((product) => product.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onHandleAdd = async(product)=>{
    try {
      const {data} = await axios.post(` http://localhost:3000/products`,product);
      console.log(data);
      alert('ban da them thanh cong')
      setproducts([...products,data]);
    } catch (error) {
      
    }
  }  
  
  const onHandleUpdate= async(product)=>{
    try {
      const {data} = await axios.put(` http://localhost:3000/products/${product.id}`,product);
      console.log(data);
      alert (' cap nhap thanh cong ');
      setproducts(products.map((item)=>(item.id == data.id ? data : item)))
    } catch (error) {
      
    }
  }
  return (
    <>
      <Routes>
          <Route>
            <Route path='/products' element={<Products products={products} removeProducts={onHandleRemove}/>}> </Route>
            <Route path='/products/add' element={<ProductsAdd onAdd={onHandleAdd}/>}></Route>
            <Route path='/products/:id/edit' element={<ProductsEdit onUpdate={onHandleUpdate}/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/signin' element={<SignIn/>}></Route>
          </Route>
      </Routes>
    </>
  )
}

export default App
