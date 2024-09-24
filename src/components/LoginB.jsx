import React from 'react'
import { Button } from '@mui/material'
import Dedicatedcss from "./component.module.css"

const LoginB = () => {
  return (
    <div ><Button id={Dedicatedcss.login} variant="contained" size="medium">
    Login
  </Button></div>
  )
}

export default LoginB