import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {Outlet }from "react-router-dom"

const LayoutAdmin = () => {
  return (
    <div>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <Sidebar/>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Outlet/>
            
            
            {/* <Routes>
              
            </Routes> */}
          </main>
        </div>
      </div>
      
    </div> 
  )
}

export default LayoutAdmin