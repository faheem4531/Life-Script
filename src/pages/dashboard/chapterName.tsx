import React from 'react'

import styles from "@/styles/Dashboard.module.css"
import { Box, Icon, Typography } from '@mui/material'
import NavBar from '@/components/dashboardComponent/Navbar'
import SideBar from '@/components/dashboardComponent/Sidebar'
import HomeSteps from '@/components/dashboardComponent/HomeSteps'
import ChapterName from '@/components/dashboardComponent/ChapterName'
import ProgressBar from '@/components/dashboardComponent/ProgressBar'
import Image from 'next/image'
import addIcon from '../../../public/addicon.svg'
import arrow from '../../../public/arrow-cropped.svg'
import noData from '../../../public/noData.svg'
const Dashboard = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <NavBar />
      <Box sx={{ marginTop: "1px", display: "flex" }}>
        <Box sx={{ width: "220px", backgroundColor: "#197065" }}>
          <SideBar />
        </Box>
        <Box sx={{ width: "100%", maxWidth: "1600px", height: "100%", padding: "10px 33px 100px", }} >
          <ChapterName />
          <Box sx={{backgroundColor:'white'}}>
          <Box sx={{ marginTop: "35px" , }} >
          <ProgressBar />
          </Box>
        <Box 
        sx={{display:'flex', justifyContent: 'space-between',mt:2}}
        >
        <Box>
            <Typography sx={{fontSize:'25px',fontWeight:700}}>Questions</Typography>
        </Box>
        <Box display={'flex'} sx={{gap:2}}>
            <Box sx = {{mr : 2}}>
                <Image src={arrow} alt='' height={180}/>
                </Box>
            <Box>

            <Image
            src={addIcon}
            alt='addicon'/>
            </Box>
            <Box>
            <Typography sx={{mt:1,color:"#197065E5",fontSize:'22px',fontWeight:700}}>Add new question</Typography>
            </Box>
        </Box>
        </Box>
            <Typography sx={{textAlign:'center', color:'#B2B2B2',fontSize:'37px'}}> Start New Question</Typography>
        <Box sx={{display:'flex',alignItems:'center', justifyContent:'center'}}>
            <Image 
            src={noData}
            alt='No Data'
            height={150}
            width={300}
            />
            
        </Box>
        <Typography sx={{textAlign:'center', color:'#B2B2B2',fontSize:'30px'}}> No Data found</Typography>
      </Box>
      </Box>

    </Box >
    </Box>
  )
}

export default Dashboard
