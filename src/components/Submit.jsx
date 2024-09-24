import React from 'react'
import { Button } from '@mui/material'
import Dedicatedcss from "./component.module.css"

const Submit = () => {
  return (
    <div><Button id={Dedicatedcss.login} variant="contained" type='submit' size="medium">
    Submit
  </Button></div>
  )
}

export default Submit