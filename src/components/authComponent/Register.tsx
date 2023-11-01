import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Image from "next/image";
import * as React from "react";
import SignupImage from "../../../public/EmailVerification.svg";
import LoginImage from "../../../public/Login.svg";
import Logo from "../../../public/logo.svg";
import Login from "./Login";
import Signup from "./Signup";

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
        <Box sx={{ p: 3 }}>
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box display="flex" justifyContent={"space-around"}>
      <Box sx={{ margin: 0, height: "100%", width: "100%" }}>
        {value == 0 ? (
          <Image
            src={LoginImage}
            alt="image of login"
            style={{ height: "100%", width: "100%" }}
          />
        ) : (
          <Image
            src={SignupImage}
            style={{ height: "100%", width: "100%" }}
            alt="Signup Image"
          />
        )}
      </Box>
      <Box sx={{ margin: 0, height: "100%", width: "100%" }}>
        <Box textAlign={"center"}>
          <Image src={Logo} width={223} height={165} alt="Logo Image" />
        </Box>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",

            background: "white",
            borderRadius: "40px",
          }}
        >
          <Tabs
            sx={{
              "& .MuiTabs-flexContainer": {
                marginTop: "82px",
                justifyContent: "center",
              },
              "& .MuiTabs-indicator": {
                display: "none", // Hide the indicator line
              },
              "& .MuiTab-root": {
                width: "300px",
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
            <Tab label="Login" {...a11yProps(0)} />
            <Tab label="Register" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <Login />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Signup />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
