import React from 'react'
import AdminSideBar from './AdminSideBar'
import AdminMainBar from './AdminMainBar'




const AdminDashBoard = () => {
  return (
    <>
      <section>
        <article style={{display:'flex'}}>
          <AdminSideBar/>
          <AdminMainBar/>
        </article>
      </section>


        
            
      
    </>
  )
}

export default AdminDashBoard