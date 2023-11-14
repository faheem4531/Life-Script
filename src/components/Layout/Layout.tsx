import React, { useState } from "react";

import NavBar from "@/components/dashboardComponent/Navbar";
import SideBar from "@/components/dashboardComponent/Sidebar";
import { Box } from "@mui/material";
import styles from "./Layout.module.css"

const Layout = () => {
  const [handleSideBar, setHandleSideBar] = useState(true)

  function closeSideBar() {
    setHandleSideBar(false)
  }

  function showSideBar() {
    setHandleSideBar(true)
  }


  return (
    <Box sx={{ backgroundColor: "#FFF9F0", overflowX: "hidden" }}>
      <Box
        sx={{
          position: "fixed",
          right: "0",
          left: { md: "220px", sm: 0, xs: 0 },
          top: "0",
          zIndex: "2",
        }}
      >
        <NavBar />
      </Box>
      <Box sx={{ marginTop: "1px", display: "flex", mt: "70px" }}>
        <Box
          sx={{
            width: "220px",
            backgroundColor: "#197065",
            position: "fixed",
            bottom: "0",
            top: "0px",
            zIndex: "2",
            display: { md: "block", xs: "none", sm: "none" }
          }}
        // className={handleSideBar ? styles.show : styles.hide}
        >
          <SideBar />
        </Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: "1600px",
            height: "100%",
            padding: "36px 33px 100px",
            marginLeft: "220px",
          }}
        // className={styles.subContainer}
        >
          {/* <HomeSteps /> */}
        </Box>
      </Box>


    </Box>
  );
};

export default Layout;
