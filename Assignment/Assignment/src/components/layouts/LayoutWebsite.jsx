import React from 'react'
import HeaderWebsite from '../HeaderWebsite'
import FooterWebsite from '../FooterWebsite'
import {Outlet} from 'react-router-dom'


const layoutWebsite = () => {
  return (
   <div>
    <div className="container py-3">
    <HeaderWebsite/>
    
    <main> 
      <Outlet></Outlet>
    </main>
    <FooterWebsite/>  
  </div>
  
  </div>
  
  )
}

export default layoutWebsite