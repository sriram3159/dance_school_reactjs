
import React, { useEffect, useState } from 'react'
import axiosInstance from '../helpers/axiosinstance'
import Dedicatedcss from "./AdminDashBoard.module.css"
import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';


const ViewBranch = () => {  
  let [data,setData]=useState([])
  let token = window.localStorage.getItem("token")
  let navigate=useNavigate()
  let img=["https://i.pinimg.com/564x/81/fc/26/81fc26cda58ac9ec7fa7788ade985df4.jpg","https://i.pinimg.com/236x/07/5d/06/075d0676b6d86ad5f67995ca559d448d.jpg","https://lh3.googleusercontent.com/WFaJgWPdd7xPL7CQHizlqEzLDjT_GUAiWHIWUM0PiVSsv8q3Rjt9QgbyQazuQwYfN5qLORajv8eKSHlKwZo-M89T2Y12zFSxSIme08c","https://lh3.googleusercontent.com/py7Qvqqoec1MB0dMKnGWn7ju9wET_dIneTb24U-ri8XAsECJnOaBoNmvfa51PIaC0rlsyQvQXvAK8RdLqpkhpkRSzmhNKqb-tY2_","https://lh3.googleusercontent.com/MWGnaY3t_1-j7YylPpq35rvBU9gIBJIsnrtW95THrBw9N0PWrAVtbHKUBH8OdxyWI9gYdymndmSgwS8tl23GylytyefNC74i4-pniQ","https://lh3.googleusercontent.com/xnHVNI6bCcQxJyLV6sG3op8PlJcT9XgMAGmHrXtj5axhCZPH7Tbc9Ppjb2gTCtGbKmilT17B0dKzczOJh9JANh8Wwz0SXH0pEqCOkQ","https://lh3.googleusercontent.com/47kJwc4CR6oGOI2l_su5CJHnEWkrUZlz7LZRGXHgF71xa-0gJc8qCBhnsNoigcNEGFfBpb3y5AxVXJP_TxvHtgUgTrU8zmBm3Two7w","https://lh3.googleusercontent.com/pNaRyPV3SkqsVvmdmN0sC-viBupr-41tZM3_cpSNH_3Zdy826gIhM0zHfoowA6SCkcsOkUxDvJ8wG5CodorohisOgR9q_QE7wH1ua-M"]
  
  useEffect(()=>
  {
   
    let fetchdata=async ()=>
    {
      try{
        
      let {data}=await axiosInstance.get("/branches/getall",{
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
    <h1 style={{fontSize:30,fontWeight:'bolder',fontVariant:'all-petite-caps',padding:10}}>Our Locations</h1>
    <div style={{display:'flex',flexWrap:'wrap',gap:50,paddingLeft:100}}>
      
        {data.map((x,y)=>{
          return(
      <div className={Dedicatedcss.viewBranch} >
          <img src={img[y]}  alt="" style={{width:230,height:230,borderTopLeftRadius:10,borderTopRightRadius:10}} />
          <div> 
          <h4>{x.academy.id}</h4>
          <h3 style={{fontSize:22,fontWeight:'bolder',fontVariant:'all-petite-caps'}}>Academy Name : {x.academy.academyName}</h3>
          <h4>{x.id}</h4>
          <h4>Adderess:</h4>
          <h5>{x.address}</h5>
          <h5>{x.city}</h5>
          <h5>Pincode :{x.pincode}</h5>
          <h5>Phone_No:{x.phone}</h5>
          <h1><Button style={{backgroundColor:"red"}} onClick={()=>
          {
            navigate(`/adminDashBoard/viewBranch/editBranch/${x.id}`)

          }} variant="contained">Edit Branch</Button></h1>
          <h1><Button style={{backgroundColor:"orange",marginTop:8,marginBottom:8}} onClick={()=>
          {
            navigate(`/adminDashBoard/viewAcademy/addCourse/${x.id}`)
                    }} variant="contained">Add Course</Button></h1>
          <h1><Button style={{backgroundColor:"green"}} onClick={async()=>
          {
              await axiosInstance.delete(`/branches/delete/${x.id}`,{
                headers:{
                  Authorization:`Bearer ${token}`
                }
              })
              navigate("/adminDashBoard/viewBranch")
          }} variant="contained">Delete</Button></h1>
          </div>
         
      </div>)
        })}
        
    </div>
    </>
  )
      }

export default ViewBranch