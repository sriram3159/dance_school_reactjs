import React, { useEffect, useState } from 'react'
import {RadioGroup,FormControl,FormControlLabel,FormLabel,Radio} from "@mui/material"
import { TextField } from '@mui/material'
import axiosInstance from '../../helpers/axiosinstance'
import Dedicatedcss from "../AdminDashBoard.module.css"
import { useNavigate, useParams } from 'react-router-dom'
import UpdateB from '../../components/UpdateB'

const EditManagerAcademydetails = () => {
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

   
    let token= window.localStorage.getItem('token')

    let handleData=(e)=>
    {
      let name=e.target.name
      let value=e.target.value
      setdata({...data,[name]:value})
    }

    let handleSubmit=async(e)=>
    { e.preventDefault()
      let payLoad={userName,phone,email,password,dob,gender,id}
      try{
      await axiosInstance.put(`/academymanagers/update/`,payLoad,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
      )
      alert(`${email} academy manager updated successfully`)
      navigate("/adminDashBoard/viewAcademyManager")
      }
      catch{
        console.log(data);
        alert('error occured')
      }
    }
    let {id}=useParams()
    useEffect(()=>
    {
        let fetchData=async()=>{
        try {
       let {data} = await axiosInstance.get(`/academymanagers/get/${id}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    setdata(data.data)
            
        } catch (error) {
            console.log(error);
        }
    }
    fetchData()
    },[id])
    return (
      <div className={Dedicatedcss.details}>
      <div>
        <form action="" method='post' autoComplete='off'>
        <ul ><li><h2>Edit Academy Manager</h2></li>
        <li><TextField id={Dedicatedcss.input}  type='text'  label="User Name" variant="outlined"  defaultValue="Default Value" value={data.userName} required name='userName' onChange={handleData}/></li>
        <li><TextField id={Dedicatedcss.input} type='email' label="Email Address" variant="outlined"  defaultValue="Default Value"  value={data.email} required name='email' onChange={handleData}/></li>
        <li><TextField id={Dedicatedcss.input} type='password' label="Password" variant="outlined" defaultValue="Default Value"  value={data.password} required name='password' onChange={handleData}/></li>
        <li><TextField id={Dedicatedcss.input} type='text' label="Phone Number" variant="outlined"  defaultValue="Default Value"  value={data.phone} required name='phone'onChange={handleData} /></li>
        <li><FormControl>
        <FormLabel style={{textAlign:'left'}} id={Dedicatedcss.input}  >Gender</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="gender" value={data.gender}  onChange={handleData}>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" /> 
            </RadioGroup>
            </FormControl></li>
        <li> <TextField id={Dedicatedcss.input} type='date'  label="Date of Birth"  defaultValue="Default Value"  value={data.dob} variant="outlined" name='dob' onChange={handleData}/></li>
        <li onClick={handleSubmit} id={Dedicatedcss.buttonD}><UpdateB/></li></ul>
        
        </form>
      </div>
      </div>
    )
  }

export default EditManagerAcademydetails