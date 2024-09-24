import React from 'react'
import { Button } from '@mui/material'
import Dedicatedcss from "./component.module.css"

const UpdateB = () => {
    return (
      <div><Button id={Dedicatedcss.login} variant="contained" type='submit' size="medium">
      Update
    </Button></div>
    )
  }

export default UpdateB