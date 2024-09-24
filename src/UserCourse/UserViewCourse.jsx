import React, { useEffect, useState } from 'react'
import axiosInstance from '../helpers/axiosinstance'
import { useParams } from 'react-router-dom'




const UserViewCourse = () => {
const [data,setData]=useState([])
const [detail,setDeatil]=useState({
    type:"",
    courseDurationInMonths:"",
    fee:"",

})
let {type,courseDurationInMonths,fee}=detail

    
let {id:urlid}=useParams()


    useEffect(()=>
{
    let fetchData=async()=>{
    try {
    let {data}=await axiosInstance.get(`/dancecourses/getall`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
    setData(data.data)

} catch (error) {
        console.log(error);
    }
}
fetchData()


},[urlid])
let value=data.filter(x=>x.id==urlid)
   type =value[0].type
   courseDurationInMonths =value[0].courseDurationInMonths
   fee =value[0].fee

  return (
    <div>
        <div><img src="" alt="" /></div>
        <div><ul>
            <li>{detail.type}</li>
            <li>{detail.courseDurationInMonths}</li>
            <li>{detail.fee}</li>
            <li></li>
            <li></li>
            <li></li>
        </ul></div>
       
        
           

        
        
    </div>

  )
}

export default UserViewCourse