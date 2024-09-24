import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRouter = ({children}) => {
    if(localStorage.getItem("token")){
  return (
    <>{children}</>
    
    )
}
else{
  return(
    <>
    {
    alert("Please Login to View Home Page")}
    <Navigate to={"/login"}/>
      </>)
}
}

export default ProtectedRouter