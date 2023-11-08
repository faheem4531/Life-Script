import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import SignupImage from "../../../public/EmailVerification.svg";
import LoginImage from "../../../public/Login.svg";
import Logo from "../../../public/logo.svg";
import Login from "./Login";
import Signup from "./Signup";
import { useTranslation } from "react-i18next";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: '24px 0' }}>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Register() {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      display="grid"
      alignItems="center"
      overflow="scroll"
      height="100dvh"
      boxSizing="border-box"
      gap="1rem"
      sx={{
        p: 2,
        backgroundColor: "#FFF7EA",
        gridTemplateColumns: {
          md: "repeat(2, minmax(0, 1fr))",
          xs: "repeat(1, minmax(0, 1fr))"
        }
      }}
    >
      <Box sx={{ height: "auto", display: { md: 'block', xs: 'none' } }}>
        {value == 0 ? (
          <Image
            src={LoginImage}
            alt="login Image"
            style={{
              height: "100%",
              maxHeight: "92vh",
              minHeight: "92vh",
              width: "100%",
              objectFit: "contain",
            }}
          />
        ) : (
          <Image
            src={SignupImage}
            style={{
              height: "100%",
              maxHeight: "92vh",
              width: "100%",
              objectFit: "contain",
            }}
            alt="Signup Image"
          />
        )}
      </Box>
      <Box
        sx={{
          margin: 0,
          height: "auto",
          width: "100%",
        }}
      >
        <Box textAlign={"center"}>
          <Image src={Logo} width={160} height={130} alt="Logo Image" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            // pl: "20px",
          }}
        >
          <Box
            sx={{
              marginTop: "20px",
              height: "auto",
              border: "1px solid black",
              maxWidth: "460px",
              width: "100%",
              background: "white",
              borderRadius: "40px",
            }}
          >
            <Tabs
              sx={{
                "& .MuiTabs-flexContainer": {
                  justifyContent: "center",
                },
                "& .MuiTabs-indicator": {
                  display: "none", // Hide the indicator line
                },
                "& .MuiTab-root": {
                  width: "50%",
                  borderRadius: "25px",
                  // backgroundColor: "wheat",

                  color: "#186F65",
                  "&.Mui-selected": {
                    backgroundColor: "#186F65",
                    color: "white",
                  },
                },
              }}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label={t("Register.Login")} {...a11yProps(0)} />
              <Tab label={t("Register.Register")}{...a11yProps(1)} />
            </Tabs>
          </Box>
        </Box>
        <Box>
          <CustomTabPanel value={value} index={0}>
            <Login signinClick={() => setValue(1)} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Signup signupClick={() => setValue(0)} />
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>
  );
}
