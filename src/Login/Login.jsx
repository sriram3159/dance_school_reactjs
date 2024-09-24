import React, { useState } from 'react'
import Dedicatedcss from "./login.module.css"
import { TextField } from '@mui/material'
import LoginB from '../components/LoginB'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../helpers/axiosinstance'
import Nav from '../Navbar/Nav'


const Login = () => {

  let [data,setData]=useState({})
  let navigate=useNavigate()
  let {userEmail,password}=data
  let payload={userEmail,password}
  console.log(userEmail);

  let handleSignup=()=>
  {
    navigate("/signup")
  }
  
  let handledata=(e)=>
  {
    e.preventDefault()
    let name=  e.target.name
    let value=e.target.value
    console.log(name,value);
    console.log("hii",{...data});
    setData({...data,[name]:value})
    console.log(data.userEmail);
  }
  // Login
  let handleSubmit=async(e)=>
  {
    e.preventDefault()
    console.log(data);
    try
    {
      
      let {data}=await axiosInstance.post("/authenticate",payload)
      
  
      console.log(data);
      let token=data.token
      let role=data.role
  
  
      if(token)
      {
        
        localStorage.setItem("token",token)
        localStorage.setItem("role",role)
        if(role==="ROLE_ADMIN")
        {
          alert (`successfully logged in with the email ${userEmail} as Admin`)
         
          navigate("/")
          
        }
        else
        {
          alert (`successfully logged in with the email ${userEmail} as User`)
          navigate("/")
        }
      }
      else
      {
        localStorage.removeItem("token",token)
        localStorage.removeItem("role",role)
      }
    
    }
    catch
    {
      alert("Invalid password or username")
      console.log("Unable to connect");
      navigate("/")
    }
  }


  return (
    <div>
      <Nav/>

        <div className={Dedicatedcss.section}>
        <form action="">
            <div className={Dedicatedcss.login} id='login2'>
                    <div id='hello'>
                    <div><TextField id="outlined-basic" type='email' label="Email" variant="outlined" required name='userEmail' onChange={handledata}/></div>
                    <div><TextField id="outlined-basic" type='password' label="Password" variant="outlined" required name='password' onChange={handledata}/></div>
                    <div  onClick={handleSubmit}><LoginB/></div>
                    <div>Forgot Password?</div>
                    <div>Don't have an account <Link to={'/signup'} onClick={handleSignup}>Signup</Link></div>
                    </div>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login