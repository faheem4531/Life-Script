"use client";
import Logo from "@/_assets/svg/logo-dashboard.svg";
import { Box } from "@mui/material";
import Image from "next/image";
// import TabPanel from "./_components/TabPanel";
import RegisterPage from "./_components/RegisterPage";

const SubscriptionPage = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#f3ecda",
          color: "#3e4f3c",
        }}
      >
        <Box
          sx={{
            bgcolor: "#30422e",
            height: "50px",
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <Image src={Logo} alt="Logo" />
        </Box>

      

        <Box>
          {/* <TabPanel /> */}
          <RegisterPage/>
        </Box>
      </Box>
    </>
  );
};

export default SubscriptionPage;
