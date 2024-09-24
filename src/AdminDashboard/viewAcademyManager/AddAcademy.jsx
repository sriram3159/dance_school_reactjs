import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Dedicatedcss from "../AdminDashBoard.module.css"
import Submit from './../../components/Submit';
import axiosInstance from '../../helpers/axiosinstance';
import { useNavigate, useParams } from 'react-router-dom';
const AddAcademy = () => {
  let [data,setData]=useState({
    academyName:"",
    description:"",
    email:"",
    contact:""
  })
  let {academyName,description,email,contact}=data
  let {id}=useParams()
  let payload={academyName,description,email,contact,id}
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
    await axiosInstance.post(`/academies/saveacademy?managerId=${id}`,payload,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    navigate("/adminDashBoard/viewAcademy")
  } catch (error) {
    console.log(error);
    console.log(payload);
  }
}
  return (
    <div className={Dedicatedcss.details}>
    <div>
      <form action="" method='post' autoComplete='off'>
      <ul ><li><h2>Add Academy</h2></li>
      <li><TextField id={Dedicatedcss.input}  type='text' label="Academy Name" variant="outlined" required name='academyName' onChange={handleData}/></li>
      <li><TextField id={Dedicatedcss.input} type='text' label="Description" variant="outlined" required name='description' onChange={handleData}/></li>
      <li><TextField id={Dedicatedcss.input} type='email' label="Email Address" variant="outlined" required name='email' onChange={handleData}/></li>
      <li><TextField id={Dedicatedcss.input} type='text' label="Contact" variant="outlined" required name='contact'onChange={handleData} /></li>
           <li onClick={handleSubmit} id={Dedicatedcss.buttonD}><Submit/></li></ul>
      </form>
    </div>
    </div>
  )
}

export default AddAcademy