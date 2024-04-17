"use client"
import { Box } from '@mui/material'
import Image from 'next/image'
import grandmaBookImage from "../../../../../public/grandmaBookImage.svg"

const BasicPlanCard = () => {
  return (
   <Box sx={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
    <Box>
    <Image src={grandmaBookImage} alt="grandma Book Image " width={250} height={348} />
    </Box>

    <Box>
        Basic Plan
    </Box>

    <Box>Includes a premium full-color hardcover book, free shipping and one year LifeScript subscription with:</Box>
    <Box>Feature Points</Box>

    <Box>Price Tag</Box>
   </Box>
  )
}

export default BasicPlanCard