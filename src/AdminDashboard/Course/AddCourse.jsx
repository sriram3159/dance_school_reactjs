import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Dedicatedcss from "../AdminDashBoard.module.css"
import Submit from './../../components/Submit';
import axiosInstance from '../../helpers/axiosinstance';
import { useNavigate, useParams } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
 
const AddCourse = () => {

  let [data,setData]=useState({
    courseDurationInMonths:"",
    fee:"",
    type:"",
  
  })
  let {courseDurationInMonths,fee,type}=data
  let {id}=useParams()
  let payload={courseDurationInMonths,fee,type,}
  let navigate=useNavigate()
  let token=localStorage.getItem("token")

  let handleData=(e)=>
{
  let name=e.target.name
  let value=e.target.value
  setData({...data,[name]:value})
  
}
let handleSubmit=async(e)=>
{
  
  e.preventDefault()
  try {
    await axiosInstance.post(`/dancecourses/save?branchid=${id}`,payload,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
   
    navigate("/adminDashBoard/viewCourse")
  } catch (error) {
    console.log(error);
    console.log(payload);
    
    
  }
}


  return (
    <div className={Dedicatedcss.details}>
    <div>
      <form action="" method='post' autoComplete='off'>
      <ul ><li><h2>Add Course</h2></li>
      <li><TextField id={Dedicatedcss.input}  type='text' label="DURATION" variant="outlined" required name='courseDurationInMonths' onChange={handleData}/></li>
      <li><TextField id={Dedicatedcss.input} type='text' label="FEES" variant="outlined" required name='fee' onChange={handleData}/></li>
      <li style={{width:380}}>
        
        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label" >DANCE FORM</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    onChange={handleData} name='type'
    label="DANCE FORM">
    <MenuItem value={"hiphop"}>Hip Hop</MenuItem>
    <MenuItem value={"contemporary"}>Contemporary</MenuItem>
    <MenuItem value={"danceWorkout"}>Dance Workout</MenuItem>
    <MenuItem value={"k_pop"}>K-Pop</MenuItem>
    <MenuItem value={"ballet"}>Ballet</MenuItem>
    <MenuItem value={"salsa"}>Salsa</MenuItem>
    <MenuItem value={"popping"}>Popping</MenuItem>
    <MenuItem value={"jazz"}>Jazz</MenuItem>
    <MenuItem value={"liteFleet"}>LiteFleet</MenuItem>
    <MenuItem value={"heels"}>heels</MenuItem>
    <MenuItem value={"houses"}>Houses</MenuItem>
    <MenuItem value={"locking"}>Locking</MenuItem>
  </Select>   
</FormControl></li>
{/* <li><TextField id={Dedicatedcss.input} type='text' label="Image" variant="outlined" required name='imageData' onChange={handleData}/></li> */}

           <li onClick={handleSubmit} id={Dedicatedcss.buttonD}><Submit/></li>
           </ul>
           
      
      </form>
    </div>
    </div>
  )
}

export default AddCourse