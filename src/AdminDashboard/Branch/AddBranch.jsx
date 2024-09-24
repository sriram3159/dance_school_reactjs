import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import Dedicatedcss from "../AdminDashBoard.module.css"
import Submit from './../../components/Submit';
import axiosInstance from '../../helpers/axiosinstance';
import { Link, useNavigate, useParams } from 'react-router-dom';
 
const AddBranch = () => {

  let [data,setData]=useState({
    academyName:"",
    description:"",
    email:"",
    contact:"",
    address:"",
    city:"",
    phone:"",
    pincode:""
  })
  let {academyName,description,email,contact,address,city,phone,pincode}=data
  let {id}=useParams()
  let payload={academyName,description,email,contact,address,city,phone,pincode,id}
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
    await axiosInstance.post(`/branches/save?aid=${id}`,payload,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    navigate("/adminDashBoard/viewBranch")
  } catch (error) {
    console.log(error);
    console.log(payload);
    
    
  }
}
useEffect(()=>
{
  let fetchData=async()=>
  {
   let {data}=await axiosInstance.get(`/academies/get/${id}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }})
      setData(data.data)
  }
  fetchData()
},[id])
  return (
    <div className={Dedicatedcss.details}>
    <div>
      <form action="" method='post' autoComplete='off'>
      <ul ><li><h2>Add Branch</h2></li>
      <li><TextField id={Dedicatedcss.input}  type='text' label="Academy Name" variant="outlined" required name='academyName' value={data.academyName} onChange={handleData}/></li>
      <li><TextField id={Dedicatedcss.input} type='text' label="Description" variant="outlined" required name='description' value={data.description} onChange={handleData}/></li>
      <li><TextField id={Dedicatedcss.input} type='email' label="Email Address" variant="outlined" required name='email' value={data.email} onChange={handleData}/></li>
      <li><TextField id={Dedicatedcss.input} type='text' label="Contact" variant="outlined" required name='contact' value={data.contact} onChange={handleData} /></li>
      <li><TextField id={Dedicatedcss.input} type='text' label="Address" variant="outlined" required name='address'  onChange={handleData} /></li>
      <li><TextField id={Dedicatedcss.input} type='text' label="City" variant="outlined" required name='city'  onChange={handleData} /></li>
      <li><TextField id={Dedicatedcss.input} type='text' label="Phone" variant="outlined" required name='phone'  onChange={handleData} /></li>
      <li><TextField id={Dedicatedcss.input} type='text' label="Pincode" variant="outlined" required name='pincode'  onChange={handleData} /></li>
           <li onClick={handleSubmit} id={Dedicatedcss.buttonD}><Submit/></li></ul>
      
      </form>
    </div>
    </div>
  )
}

export default AddBranch