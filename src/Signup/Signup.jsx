import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Dedicatedcss from "./signup.module.css"
import {RadioGroup,FormControl,FormControlLabel,FormLabel,Radio} from "@mui/material"
import SignupB from '../components/SignupB'
import axiosInstance from '../helpers/axiosinstance'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
  

  let [data,setdata]=useState({
    userName:"",
    phone:"",
    email:"",
    password:"",
    dob:"",
    gender:"",
    role:""
  })
  let {userName,phone,email,password,dob,gender,role}=data
  let payLoad={userName,phone,email,password,dob,gender,role}

  let handledata=(e)=>
  {
    let name=e.target.name
    let value=e.target.value
    setdata({...data,[name]:value})
    console.log(data.userName);
  }

  let navigate=useNavigate()

  let handleSubmit=async(e)=>
  { e.preventDefault()
    try{
    await axiosInstance.post("/users/save",payLoad)
    console.log("data inserted successfully");
    }
    catch{
      alert('error occured')
    }
    navigate("/")

  }
  return (
    <div className={Dedicatedcss.mSignup}>
        <div className={Dedicatedcss.signup}>
            <form action="/">           
            <div className={Dedicatedcss.input}>
            <TextField id="outlined-basic" label="Username" variant="outlined" name='userName' onChange={handledata}/>
            <TextField id="outlined-basic" label="Phone No" variant="outlined" name="phone" onChange={handledata}/>
            <TextField id="outlined-basic" label="Email" variant="outlined" name='email' onChange={handledata}/>
            <TextField id="outlined-basic" label="Password" variant="outlined" name='password' 
            onChange={handledata}/>
            <TextField id="date" type='date'  label="Date of Birth" variant="outlined" name='dob'
            onChange={handledata}/>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="gender"
                    onChange={handledata}>
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" /> 
                    </RadioGroup>
                    </FormControl>
            <TextField id="outlined-basic" label="Role" variant="outlined" name='role'
            onChange={handledata}/>
            <div id={Dedicatedcss.signupB} onClick={handleSubmit}><SignupB/></div>
            </div>
            </form>

        </div>
    </div>
  )
}

export default Signup