import React from 'react'
import Dedicatedcss from "./nav.module.css"
// import { Button } from '@mui/material'

import { Link, useNavigate } from 'react-router-dom'


const Nav = () => {
  let navigate=useNavigate()
let role= localStorage.getItem('role')
let token= localStorage.getItem('token')
let handlechange=()=>
{
  localStorage.removeItem("token")
  localStorage.removeItem("role")
  navigate("/login")
    
}
  return (
    <div>
        <div className={Dedicatedcss.navbar}>
          <div id={Dedicatedcss.logo}><span>Let's Dance</span></div>
            <div className={Dedicatedcss.Nmenu}><ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/blog"}>Blog</Link></li>
  {role==="ROLE_ADMIN"? <Link to="/adminDashBoard"><li>Admin Dashboard</li></Link>:null}
  {role==="ROLE_USER"? <Link to="/courses"><li>Courses</li></Link>:null}
  {token?<Link to="/login"><li onClick={handlechange}>Logout</li></Link>:
  <>
  <Link to="/login"><li>Login</li></Link>
  <Link to="/signup">Signup</Link></>}
            </ul></div>
        </div>
    </div>
  )
}

export default Nav