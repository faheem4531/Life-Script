import React from "react";
import Image from "next/image";
import Arrow from "../../../public/startArrow.png";
import { Box, Typography } from "@mui/material";
const getStarted = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: 'url("/letsStarted.svg")',
          backgroundSize: "cover", // Adjust as needed
          backgroundPosition: "center center", // Adjust as needed
          backgroundRepeat: "no-repeat", // Adjust as needed
          width: "100%",
          height: "100vh", // Adjust the height as needed
          overflow: "hidden",
          margin: 0,
          padding: 0,
          gap: 0,
        }}
      >
        <Box
          sx={{
            paddingTop: { xs: "170px", sm: "140px", md: "120px", lg: "100px", xl:'70px'},
            paddingLeft: { xs: "20px", sm: "75px", md: "100px", lg: "125px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "40px", md: "50px", lg: "60px" ,xl:'100px'},
              color: "white",
            }}
          >
            Hi Naseer 👋
          </Typography>
        </Box>
        <Box
          sx={{
            paddingLeft: { xs: "140px", sm: "50px", md: "90px", lg: "250px",xl:'800px' },
            paddingTop: { xs: "140px", sm: "120px", md: "100px", lg: "100px",xl:'100px' }
            , color:'white'
          }}
        >
          <Image 
          src={Arrow}
           alt="arrow" 
           width={430} 
           height={100} />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap : {xs : "0px", md: "0px", lg : "0px"},
            paddingTop: { xs: "140px", sm: "120px", md: "100px", lg: "70px",xl:'150px' },
            paddingLeft: { xs: "130px", sm: "160px", md: "240px", lg: "300px" ,xl:'920px'}
        
          }}
        
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "60px", md: "70px", lg: "90px" ,xl:'100px'},
              color: "white",
            }}
          >
            Let Us Help{" "}
          </Typography>
            <Typography sx ={{fontSize: { xs: "35px", sm: "60px", md: "70px", lg: "100px",xl:'100px' }, color: "#197065", paddingLeft: "30px" }}>
              You...
            </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default getStarted;
