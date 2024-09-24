import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import Dedicatedcss from "../AdminDashBoard.module.css"
import Submit from '../../components/Submit';
import axiosInstance from '../../helpers/axiosinstance';
import { useNavigate, useParams } from 'react-router-dom';

const EditBranch = () => {
  let [data,setData]=useState({
    address:"",
    city:"",
    phone:"",
    pincode:""
  })
  let {address,city,pincode,phone,...others}=data
  let {id}=useParams()
  let payload={address,city,phone,pincode,...others}
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
    await axiosInstance.put(`/branches/update/${id}`,payload,{
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
  let  {data}=await axiosInstance.get(`/branches/get/${id}`,{
    headers:{
      Authorization:`Bearer ${token}`
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
      <ul ><li><h2>Edit Branch</h2></li>
      <li><TextField id={Dedicatedcss.input}  type='text' label="Address" variant="outlined" defaultValue="Default Value" required name='address' value={data.address} onChange={handleData}/></li>
      <li><TextField id={Dedicatedcss.input} type='text' label="City" variant="outlined" defaultValue="Default Value" required name='city' value={data.city} onChange={handleData}/></li>
      <li><TextField id={Dedicatedcss.input} type='text' label="Contact" variant="outlined" defaultValue="Default Value" required name='phone' value={data.phone} onChange={handleData}/></li>
      <li><TextField id={Dedicatedcss.input} type='text' label="Pincode" variant="outlined" defaultValue="Default Value" required name='pincode' value={data.pincode} onChange={handleData} /></li>
           <li onClick={handleSubmit} id={Dedicatedcss.buttonD}><Submit/></li></ul>
      
      </form>
    </div>
    </div>
  )
}

export default EditBranch