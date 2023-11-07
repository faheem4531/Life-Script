import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import styles from "./Navbar.module.css"
import Logo from "@/_assets/svg/white-logo.svg"
import Profile from "@/_assets/svg/profile.svg"
import Noti from "@/_assets/svg/header-bell.svg"
import Search from "@/_assets/svg/searchbar.svg"
import { InputBase } from '@mui/material';
import Button from '../button/Button'

const NavBar = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#197065", padding: "8px 25px 8px 14px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Image
          src={Logo}
          alt='logo'
          className={styles.logo}
        />
        <Box sx={{ backgroundColor: "#fff", padding: "0 20px 0 6px", width: "300px", display: "flex", alignItems: "center", borderRadius: "15px", marginLeft: "85px" }}
          className={styles.searchBox}>
          <Image
            src={Search}
            alt='logo'
          />
          <InputBase sx={{ backgroundColor: "#fff", width: "100%", paddingLeft: "5px", opacity: ".6" }} placeholder='Search' />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Button
          onClick={() => { }}
          title="Start a new Chapter"
          border="1px solid #fff"
          background="transparent"
          width="180px"
          padding="8px 0"
          borderRadius="19px"
          color="#fff"
        />
        <Button
          onClick={() => { }}
          title="Get Template"
          border="1px solid #fff"
          background="#fff"
          width="180px"
          padding="8px 0"
          borderRadius="19px"
          color="#197065"
        />
        <Image
          src={Noti}
          alt='logo'
          className={styles.logo}
        />
        <Image
          src={Profile}
          alt='logo'
          className={styles.logo}
        />
      </Box>
    </Box>
  )
}

export default NavBar
