import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TabItem from "./TabItem";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const tabsStyling = {
        alignItems: "start",
        p: "14px 22px",
        maxWidth: " 100%",
        borderRadius: "10.999px",
        border: "0.917px solid #DEDEDE",
        position: "relative",
        color: "black",
        mb: "18px",
        "&.Mui-selected": {
          color: "#197065",
          borderColor: " #197065",
          position: "relative",
          fontWeight: 600,
        },

        "&:after": {
          content: '""',
          width: "10px",
          height: "10px",
          borderBottom: "0.917px solid #197065",
          borderLeft: "0.917px solid #197065",
          position: "absolute",
          right: " -7.774px",
          bottom: "29.221px",
          transform: "rotate(-135deg)",
          zIndex: "456789",
        },
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const [clickCheck, setClickCheck] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setClickCheck(newValue)
  };

  console.log("value", value);
  console.log("clickCheck", clickCheck === value );
  

  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: " 16.148px",
        p: "26px 48px",
      }}
    >
      <Typography
        sx={{
          color: "#081131",
          fontSize: " 16.498px",
          fontWeight: 600,
          letterSpacing: "0.458px",
          mb: "65px",
          textAlign: "center",
        }}
      >
        Choose a subscription plan below before Aug30th,2023 to unlock this
        special offer.
      </Typography>
      <Box sx={{ flexGrow: 1, display: "flex", gap: "10px" }}>
        <Box
          sx={{
            flex: "1",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
          >
            <Tab
              label={
                <TabItem/>
              }
              {...a11yProps(0)}
            sx={tabsStyling}
            />
            <Tab label="Item Two" {...a11yProps(1)}  sx={tabsStyling} />
            <Tab label="Item Three" {...a11yProps(2)}  sx={tabsStyling} />
          </Tabs>
        </Box>

        <Box
          sx={{
            flex: "1",
          }}
        >
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
