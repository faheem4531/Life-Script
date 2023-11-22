import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styles from "./Custom.module.css"
import NextIcon from "@/_assets/svg/next-icon.svg"
import Image from "next/image";

export const ViewBook = () => {
  return (
    <Box sx={{
      bgcolor: "#197065",
      color: "#fff",
      width: "100%",
      padding: "21px 0",
      borderRadius: "14px",
      position: "relative"
    }}
      className={styles.viewBook}
    >
      <Typography sx={{ fontSize: "28px", fontWeight: 500, textAlign: "center" }}>
        View Book
      </Typography>
      <Box sx={{ position: "absolute", top: "34px", right: "45px" }}>
        <Image alt="next" src={NextIcon} />
      </Box>
    </Box>
  )
}


export const ViewTree = () => {
  return (
    <Box sx={{
      bgcolor: "#197065",
      color: "#fff",
      width: "100%",
      padding: "21px 0",
      borderRadius: "14px",
      position: "relative"
    }}
      className={styles.viewTree}
    >
      <Typography sx={{ fontSize: "28px", fontWeight: 500, textAlign: "center" }}>
        Family Tree
      </Typography>
      <Box sx={{ position: "absolute", top: "34px", right: "45px" }}>
        <Image alt="next" src={NextIcon} />
      </Box>
    </Box>
  )
}


export const PrintBook = () => {
  return (
    <Box sx={{
      color: "#197065",
      bgcolor: "#fff",
      width: "100%",
      padding: { xl: "45px 60px 45px 50px", lg: "30px 30px", sm: "25px" },
      borderRadius: "19px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      columnGap: "15px"
    }}>
      <Box sx={{ width: "65%" }}>
        <Typography sx={{ fontSize: { xl: "45px", md: "35px" }, fontWeight: 700 }}>
          Every Life is Special
        </Typography>
        <Typography sx={{ fontSize: { xl: "19px", md: "15px" }, marginTop: "15px" }}>
          Lorem ipsum dolor sit amet consectetur. Morbi eleifend sapien vestibulum ante facilisis. Ultrices tincidunt elit
        </Typography>
      </Box>
      <Button sx={{
        color: "#fff",
        bgcolor: "#197065",
        borderRadius: "34px",
        width: { xl: "250px", sm: "180px", },
        fontSize: { xl: "23px", sm: "16px", },
        height: { xl: "70px", sm: "50px", },
        '&:hover': {
          backgroundColor: '#197069',
          color: '#fff',
        },
      }}>
        Print my book
      </Button>
    </Box>
  )
}