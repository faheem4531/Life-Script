import React from 'react'
import Image from 'next/image'
import styles from "./Sidebar.module.css"
import { Box } from '@mui/material'
import OverView from "@/_assets/svg/overView.svg"
import Home from "@/_assets/svg/home.svg"
import Completed from "@/_assets/svg/completed.svg"
import Recent from "@/_assets/svg/recent.svg"
import ViewBook from "@/_assets/svg/view-book.svg"
import Tree from "@/_assets/svg/view-book.svg"
import Faq from "@/_assets/svg/faq.svg"
import Suport from "@/_assets/svg/support.svg"

const SideBar = () => {
  return (
    <Box sx={{ width: "220px", backgroundColor: "#197065", height: "90vh", color: "#fff" }}>
      <Box sx={{ padding: "35px 29px 0 11px" }}>
        <a className={styles.link}>
          <Image alt='icon' src={OverView} />Overview
        </a>
        <a className={`${styles.link} ${styles.active}`}>
          <Image alt='icon' src={Home} />All Chapters
        </a>
        <a className={styles.link}>
          <Image alt='icon' src={Completed} />Completed
        </a>
        <a className={styles.link}>
          <Image alt='icon' src={Recent} />Recent
        </a>
        <a className={styles.link}>
          <Image alt='icon' src={ViewBook} />View Book
        </a>
        <a className={styles.link}>
          <Image alt='icon' src={Tree} />Family Tree
        </a>
      </Box>
      <Box sx={{ borderTop: "1px solid #fff", padding: "20px 29px 0 11px" }}>
        <a className={styles.link}>
          <Image alt='icon' src={Faq} />FAQ
        </a>
        <a className={styles.link}>
          <Image alt='icon' src={Suport} />Support
        </a>
      </Box>
    </Box>
  )
}

export default SideBar
