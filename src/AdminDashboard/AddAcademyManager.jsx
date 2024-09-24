import React, { useState } from 'react'
import {RadioGroup,FormControl,FormControlLabel,FormLabel,Radio} from "@mui/material"
import { TextField } from '@mui/material'
import SignupB from '../components/SignupB'
import axiosInstance from '../helpers/axiosinstance'
import Dedicatedcss from "./AdminDashBoard.module.css"
import { useNavigate } from 'react-router-dom'

const AddAcademyManager = () => {
  let navigate=useNavigate()
  let [data,setdata]=useState({
    userName:"",
    phone:"",
    email:"",
    password:"",
    dob:"",
    gender:""
  })
  let {userName,phone,email,password,dob,gender}=data
  let payLoad={userName,phone,email,password,dob,gender}
  let token= window.localStorage.getItem('token')
  let handleData=(e)=>
  {
    let name=e.target.name
    let value=e.target.value
    setdata({...data,[name]:value})
    console.log(data.userName);
  }
  let handleSubmit=async(e)=>
  { e.preventDefault()
    try{
    await axiosInstance.post("/academymanagers/save",payLoad,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }
    )
    alert(`${email} academy manager registered successfully`)
    navigate("/adminDashBoard/viewAcademyManager")
    }
    catch{
      alert('error occured')
    }
  }
  return (
    <div className={Dedicatedcss.details}>
    <div>
      <form action="" method='post' autoComplete='off'>
      <ul ><li><h2>Academy Manager</h2></li>
      <li><TextField id={Dedicatedcss.input}  type='text' label="User Name" variant="outlined" required name='userName' onChange={handleData}/></li>
      <li><TextField id={Dedicatedcss.input} type='email' label="Email Address" variant="outlined" required name='email' onChange={handleData}/></li>
      <li><TextField id={Dedicatedcss.input} type='password' label="Password" variant="outlined" required name='password' onChange={handleData}/></li>
      <li><TextField id={Dedicatedcss.input} type='text' label="Phone Number" variant="outlined" required name='phone'onChange={handleData} /></li>
      <li><FormControl>
      <FormLabel style={{textAlign:'left'}} id={Dedicatedcss.input}  >Gender</FormLabel>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="gender" onChange={handleData}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" /> 
          </RadioGroup>
          </FormControl></li>
      <li> <TextField id={Dedicatedcss.input} type='date'  label="Date of Birth" variant="outlined" InputLabelProps={{ shrink: true }} name='dob' onChange={handleData}/></li>
      <li onClick={handleSubmit} id={Dedicatedcss.buttonD}><SignupB/></li></ul>
      
      </form>
    </div>
    </div>
  )
}
export default AddAcademyManager