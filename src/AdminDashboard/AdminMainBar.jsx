import React from 'react'
import { Outlet} from 'react-router-dom';
import Dedicatedcss from "./AdminDashBoard.module.css"


const AdminMainBar = () => {
   
  return (
    <div className={Dedicatedcss.adminMainBar}>
             <Outlet/>
             </div>     
  )
}

export default AdminMainBar