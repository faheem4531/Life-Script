"use client";
import Logo from "@/_assets/svg/logo-dashboard.svg";
import { Box } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import PurchaseForm from "./_components/PurchaseForm";
import RegisterPage from "./_components/RegisterPage";
import TabPanel from "./_components/TabPanel";
import NewTabBar from "./_components/NewTabBar";

const SubscriptionPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    { label: "Choose Plan", active: selectedTab >= 0 },
    { label: "Register", active: selectedTab >= 1 },
    { label: "Payment", active: selectedTab >= 2 },
 
  ];

  const handleTabClick = (index) => {
    setSelectedTab(index );
    console.log("Click HandleClick Tab")
  };

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


        <Box   sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%", 
        marginTop: "30px",
        marginLeft:"80px" 
    }}>

        <NewTabBar tabs={tabs} onClick={handleTabClick}  />
        </Box>
      

        <Box>
        <Box mt="15px">
            {selectedTab === 0 && (
                        <TabPanel selectedTab={selectedTab} onClick={handleTabClick} />
            )}
            {selectedTab === 1 && (
              <RegisterPage  selectedTab={selectedTab} onClick={handleTabClick} />
            )}
            {selectedTab === 2 && (
               <PurchaseForm  selectedTab={selectedTab} onClick={handleTabClick} />
            )}
            
          </Box>

         

         
        </Box>
      </Box>
    </>
  );
};

export default SubscriptionPage;
