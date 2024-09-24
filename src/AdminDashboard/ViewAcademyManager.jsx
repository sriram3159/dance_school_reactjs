import React, { useEffect, useState } from 'react'
import axiosInstance from '../helpers/axiosinstance'
import Dedicatedcss from "./AdminDashBoard.module.css"
import { faker } from '@faker-js/faker'
import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';

const ViewAcademyManager = () => {

  let [data,setData]=useState([])
  let [img,setImg]=useState(faker.image.avatar())
  let token = window.localStorage.getItem("token")
  let navigate=useNavigate()
  
  useEffect(()=>
  {
   
    let fetchdata=async ()=>
    {
      try{
        
      let {data}=await axiosInstance.get("/academymanagers/getall",{
        headers: {
          Authorization : `Bearer ${token}`
        }
      })
      setData(data.data)
      }
      catch(error)
      {
        console.log(error.code)
      }
    }
    fetchdata()
  },)
  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>
      
        {data.map((x)=>{
          return(
      <div className={Dedicatedcss.viewManager} >
          <img src={img}  alt="" style={{width:150,height:150,borderRadius:75}} />
          <div> <h1 style={{fontSize:30,fontWeight:'bolder',fontVariant:'all-petite-caps'}}>{x.userName}</h1>
          <h4>ID : {x.id}</h4>
          <h5>ROLE : {x.role}</h5>
          <h1><Button style={{backgroundColor:"orange"}} onClick={()=>
          {
            navigate(`/adminDashBoard/viewAcademyManager/${x.id}`)
          }} variant="contained">View Details</Button></h1>
          </div>
         
      </div>)
        })}
        
    </div>
  )
}

export default ViewAcademyManager