import React from 'react'
import { Button } from '@mui/material'
import Dedicatedcss from "./component.module.css"

const SignupB = () => {
  return (
    <div><Button id={Dedicatedcss.login} variant="contained" type='submit' size="medium">
    Sign up
  </Button></div>
  )
}

export default SignupB