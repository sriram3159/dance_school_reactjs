
import React, { useEffect, useState } from 'react'
import axiosInstance from '../helpers/axiosinstance'
import Dedicatedcss from "./UserCourses.module.css"
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const UserCourses = () => {  
  let [data,setData]=useState([])
  let token = window.localStorage.getItem("token")
  let img={
    hiphop:"https://global-uploads.webflow.com/5dbb40d6d8c97447e9450447/60baaab0aa12e6d6ad9074b6_STEEZY_HIPHOP-min.jpg",
    contemporary:"https://global-uploads.webflow.com/5dbb40d6d8c97447e9450447/60baaab0aa12e68aa29074b7_STEEZY_CONTEMP-min.jpg",
    danceWorkout:"https://global-uploads.webflow.com/5dbb40d6d8c97447e9450447/61cb62b743a7564c79d61be4_PRODUCT_THUMBNAIL-min.jpg",
    k_pop:"https://global-uploads.webflow.com/5dbb40d6d8c97447e9450447/60baaab0d8ce5038de0475ff_STEEZY_KPOP-min.jpg",
    ballet:"https://global-uploads.webflow.com/5dbb40d6d8c97447e9450447/60baaab004cd38de543dd7a1_STEEZY_BALLET-min.jpg",
    salsa:"https://global-uploads.webflow.com/5dbb40d6d8c97447e9450447/615e128e6cd629d07d38baf1_SALSA_CATEGORY_THUMB-min.jpg",
    popping:"https://global-uploads.webflow.com/5dbb40d6d8c97447e9450447/60baaab0707f8ffece1e0ea3_STEEZY_POPPING-min.jpg",
    jazz:"https://global-uploads.webflow.com/5dbb40d6d8c97447e9450447/60baaab0f8caa4145fe07fef_STEEZY_JAZZ-min.jpg",
    liteFleet:"https://global-uploads.webflow.com/5dbb40d6d8c97447e9450447/60baaab04214ca70831e3e4f_STEEZY_LITEFEET-min.jpg",
    heels:"https://global-uploads.webflow.com/5dbb40d6d8c97447e9450447/60baaab0f91c1677a7d6c4bb_STEEZY_HEELS-min.jpg",
    houses:"https://global-uploads.webflow.com/5dbb40d6d8c97447e9450447/60baaab0707f8f87061e0ea2_STEEZY_HOUSE-min.jpg",
    locking:"https://global-uploads.webflow.com/5dbb40d6d8c97447e9450447/60baaab07a233c5367e6035e_STEEZY_LOCKING-min.jpg"
  }
  let navigate=useNavigate()
  useEffect(()=>
  {
   
    let fetchdata=async ()=>
    {
      try{
        
      let {data}=await axiosInstance.get("/dancecourses/getall",{
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
    <h1 id={Dedicatedcss.head}><span>Learn A Variety of Dance Styles</span> <HomeIcon className={Dedicatedcss.home} onClick={()=>
    {
      navigate("/")
    }}/></h1>
    
    <div style={{display:'flex',flexWrap:'wrap',gap:40,paddingLeft:70,marginTop:40,marginBottom:40}}>
      
        {data.map((x)=>{
          return(

      <div className={Dedicatedcss.viewCourse} >
       
          <img id={Dedicatedcss.select} src={img[x.type]} alt="" onClick={()=>
          {
            navigate(`/courses/UserViewCourses/${x.id}`)
          }}/>
         
         
          <h4  style={{height:45,textAlign:'center',paddingTop:2, fontVariant:'all-petite-caps',fontSize:'x-large'}} onClick={()=>
          {
            
          }}>{x.type} </h4>
         
      </div>)
        })}
        
    </div>
    </>
  )
      }

export default UserCourses