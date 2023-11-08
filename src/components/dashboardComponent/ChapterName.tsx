import React from 'react'
import Image from 'next/image'
import styles from "./HomeSteps.module.css"
import { Box, Divider, Icon, Typography } from '@mui/material'
import BookImage from "../../../public/chapterName.svg"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CheckIcon from '@mui/icons-material/Check';
import Check from '../../../public/checkIcon.png'


const HomeSteps = () => {
  return (
    <Box sx={{ backgroundColor: "#197065", color: "#fff", borderRadius: "24px", padding: "10px 30px", display: "flex", alignItems: "center", justifyContent: "space-between" }}
    >
    <Box>
    <Typography sx={{fontSize:'30px'}}>Enter</Typography>
    <Typography sx={{fontSize:'52px'}}>Chapter Name</Typography>
    <TextField
    variant="outlined"
    placeholder='My Adventurous Life'
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Image
            src={Check}
            alt='check-icon'
            />
          
          </InputAdornment>)}}
          sx={{
            marginTop: "10px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "50px",
              backgroundColor: "white",
            },
            width: "390px",
          }}/>
    
    </Box>
    <Box>
    <Image
    src={BookImage}
    alt='book image'
    />
    </Box>
    </Box >
  )
}

export default HomeSteps
