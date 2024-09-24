import React, { useEffect, useState } from 'react'
import Dedicatedcss from "./AdminDashBoard.module.css"
import axiosInstance from '../helpers/axiosinstance'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const ViewAcademy = () => {
    let [data,setData]=useState([])
    let count=1;
    let navigate=useNavigate()
    useEffect(()=>
    {
        let fetchData=async()=>
        {
            let {data}=await axiosInstance.get("/academies/getall",{headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
                
            }})
            setData(data.data)
        }
        fetchData()

    },[])
  return (
    <div className={Dedicatedcss.VA_main}>
      <div className={Dedicatedcss.VA_center}>
        <table className={Dedicatedcss.VA_table}>
            <tr>
                <td>S.NO</td>
                <td>ACADEMY NAME</td>
                <td style={{width:300}}>DESCRIPTION</td>
                <td>EMAIL</td>
                <td>CONTACT NUMBER</td>
                <td>EDIT</td>
                <td>ADD BRANCH</td>
                <td>DELETE</td>
            </tr>
                {data.map((x)=>{
                    return(
                    <tr>
                        <td>{count++}</td>
                        <td>{x.academyName}</td>
                        <td>{x.description}</td>
                        <td>{x.email}</td>
                        <td>{x.contact}</td>
                        <td><Button style={{backgroundColor:"red",margin:5}} onClick={()=>
          {
            navigate(`/adminDashBoard/viewAcademy/editAcademy/${x.id}`)
          }} variant="contained">Edit</Button></td>
                        <td><Button style={{backgroundColor:"orange",margin:5}} onClick={()=>
          {
            navigate(`/adminDashBoard/viewAcademy/addBranch/${x.id}`)
          }} variant="contained">Add Branch</Button></td>
          <td><Button style={{backgroundColor:"black",margin:5}} onClick={async()=>
          {
            await axiosInstance.delete(`/academies/delete/${x.id}`,{
              headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
              }
            })
            window.location.assign(`/adminDashBoard/viewAcademy`)
          }} variant="contained">Delete</Button></td>
                    </tr>)
                
                })}
                    
        </table>
        </div>
    </div>
  )
}

export default ViewAcademy