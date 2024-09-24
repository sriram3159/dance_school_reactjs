import React from 'react'
import Dedicatedcss from "./AdminDashBoard.module.css"
import { Link } from 'react-router-dom'



const AdminSideBar = () => {
  return (
    
            <div className={Dedicatedcss.adminDashBoard}>
                <ul>
                  <li><h4>ADMIN DASHBOARD</h4></li>
                  <li><Link to="/adminDashBoard/addAcademyManager">Add Academy Manager</Link> </li>
                  <li><Link to={"/adminDashBoard/viewAcademyManager"}>View Academy Manager</Link></li>
                  <li><Link to={"/adminDashBoard/viewAcademy"}>View Academy</Link></li>
                  <li><Link to={"/adminDashBoard/viewBranch"}>View Branch</Link></li>
                  <li><Link to={"/adminDashBoard/viewCourse"}>View Course</Link></li>
                  <li><h5><Link to={"/"}>Home</Link></h5></li>
              </ul>
            </div>
    
  )
}

export default AdminSideBar