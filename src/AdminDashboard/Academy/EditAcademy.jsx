import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import Dedicatedcss from "../AdminDashBoard.module.css"
import Submit from '../../components/Submit';
import axiosInstance from '../../helpers/axiosinstance';
import { useNavigate, useParams } from 'react-router-dom';
const EditAcademy = () => {
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
    await axiosInstance.put(`/academies/update`,payload,{
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
useEffect(()=>
{
  let fetchData=async()=>
  {
  let  {data}=await axiosInstance.get(`/academies/get/${id}`,{
    headers:{
      'Authorization':`Bearer ${token}`
    }
  })
  setData(data.data)
  } 
  fetchData()
},[id])
  return (
    <div className={Dedicatedcss.details}>
    <div>
      <form action="" method='post' autoComplete='off'>
      <ul ><li><h2>Edit Academy</h2></li>
      <li><TextField id={Dedicatedcss.input}  type='text' label="Academy Name" variant="outlined" defaultValue="Default Value" required name='academyName' value={data.academyName} onChange={handleData}/></li>
      <li><TextField id={Dedicatedcss.input} type='text' label="Description" variant="outlined" defaultValue="Default Value" required name='description' value={data.description} onChange={handleData}/></li>
      <li><TextField id={Dedicatedcss.input} type='email' label="Email Address" variant="outlined" defaultValue="Default Value" required name='email' value={data.email} onChange={handleData}/></li>
      <li><TextField id={Dedicatedcss.input} type='text' label="Contact" variant="outlined" defaultValue="Default Value" required name='contact' value={data.contact} onChange={handleData} /></li>
           <li onClick={handleSubmit} id={Dedicatedcss.buttonD}><Submit/></li></ul>
      </form>
    </div>
    </div>
  )
}
export default EditAcademy