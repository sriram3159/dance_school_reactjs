import React,{ useEffect, useState } from 'react'
// import Button from '@mui/material/Button';
import Dedicatedcss from "../AdminDashBoard.module.css"
import axiosInstance from '../../helpers/axiosinstance';
import { useNavigate, useParams } from 'react-router-dom';
import { faker } from '@faker-js/faker'
import Button from '@mui/material/Button';



const ViewManageracademydetails = () => {
    let [data,setData]=useState([])
    let [img,setImg]=useState(faker.image.avatar())
    let token = window.localStorage.getItem("token")
    let {id}=useParams()
    let navigate=useNavigate()
    
    useEffect(()=>
    {
    
      let fetchdata=async ()=>
      {
        try{
          
        let {data}=await axiosInstance.get(`/academymanagers/get/${id}`,{
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
        <>
        <div className={Dedicatedcss.mainDiv}>
          <img src={img} alt=""  />
          <div className={Dedicatedcss.subDiv}>
            <ul>
              <li>Name : {data.userName}</li>
              <li>Email : {data.email}</li>
              <li>Role : {data.gender}</li>
              <li>Age :  {data.age}</li>
              <li>Date of Birth :  {data.dob}</li>
              <li>Phone_No : {data.phone}</li>
              <li>Role : {data.role}</li>
              <li><Button id={Dedicatedcss.vd_button} style={{backgroundColor:"red"}} onClick={()=>
          {
              navigate(`/adminDashBoard/viewAcademyManager/editManagerAcademydetails/${id}`)
          }} variant="contained">Edit</Button>
          <Button id={Dedicatedcss.vd_button} style={{backgroundColor:"red"}} onClick={()=>
          {
            navigate(`/adminDashBoard/viewAcademyManager/AddAcademy/${id}`)
          }} variant="contained">Add Academy</Button>
          <Button id={Dedicatedcss.vd_button} style={{backgroundColor:"red"}} onClick={async()=>
          {
              try {
                await axiosInstance.delete(`/academymanagers/delete/${id}`,{
                  headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                  }
                })
                console.log("successfully deleted");
                navigate('/adminDashBoard/viewAcademyManager')
              } catch (error) {
                console.log(error);
                navigate('/adminDashBoard/viewAcademyManager')
              }
          }} variant="contained">Delete</Button></li>
            </ul>
        </div>
          </div>
        
        </>
    )
  }
  
  

export default ViewManageracademydetails