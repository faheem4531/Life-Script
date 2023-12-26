import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import Image from "next/image";
import { useEffect, useState } from "react";
import backArrow from "../../../_assets/svg/left.svg";
import NextArrow from "../../../_assets/svg/rightArrow.svg";

export default function TabTwo({ onClickBack, onClickNext, data }) {
  const [maritalStatus, setMaritalStatus] = useState("Single");
  const [gender, setGender] = useState("Male");
  const [selectedDate, setSelectedDate] = useState();
  const [showTooltip, setShowTooltip] = useState(false);
  const [name, setName] = useState("");
  const maxDate = new Date();
  
  useEffect(() => {
    if(data?.name){
        setGender(data.gender);
        setMaritalStatus(data.martialStatus);
        setSelectedDate(data.dateOfBirth);
        setName(data.name);
    }
  },[data])

  const handleButtonClick = () => {
    setShowTooltip(false);
    if (!name || !maritalStatus || !gender || !selectedDate) {
      setShowTooltip(true);
    } else {
      // Continue with your button click logic
      onClickNext({
        name: name,
        maritalStatus: maritalStatus,
        gender: gender,
        dob: selectedDate
      });
    }
  };

  return (
    <>
      <Box
        sx={{
          color: "black",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Typography
          sx={{
            fontSize: "44px",
            fontWeight: 700,
          }}
        >
          Identity!
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            color: "rgba(78, 81, 109, 0.70)",
          }}
        >
          Tell us about yourself
        </Typography>
      </Box>
      <Box sx={{ mt: 6 }}>
        <Typography
          sx={{
            fontSize: "33.75px",
            fontWeight: 700,
          }}
        >
          Tell us about yourself
        </Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={4}>
          {/* First row with two text fields */}
          <Grid container item xs={12} gap={10}>
            <Grid item xs={5.5} mt={"10px"}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "20.142px",
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#171725",
                  }}
                >
                  Full Name
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder="Full Name"
                  name="email"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{
                    marginTop: "10px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                      backgroundColor: "white",
                    },
                    width: "100%",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={5.5} mt={"10px"}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "20.142px",
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#171725",
                  }}
                >
                  Marital Status
                </Typography>
                <Select
                  placeholder="Marital Status"
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  sx={{
                    marginTop: "10px",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    width: "100%",
                  }}
                >
                  <MenuItem value="Single">Single</MenuItem>
                  <MenuItem value="Married">Married</MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>

          {/* Second row with two text fields */}
          <Grid container item xs={12} spacing={2} gap={10}>
            <Grid item xs={5.5} mt={"10px"}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "20.142px",
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#171725",
                  }}
                >
                  Gender
                </Typography>
                <Select
                  placeholder="Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  sx={{
                    marginTop: "10px",
                    backgroundColor: "white",
                    width: "100%",
                    borderRadius: "50px",
                  }}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Special</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={5.5} mt={"10px"}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "20.142px",
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#171725",
                  }}
                >
                  Date of Birth
                </Typography>
                <DatePicker
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  sx={{
                    marginTop: "10px",
                    backgroundColor: "white",
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: "50px",
                      },
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: "80px",
          right: "120px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Button
          onClick={onClickBack}
          sx={{
            width: "176px",
            borderRadius: "26.267px",
            border: " 0.71px solid #197065",
            fontSize: { xs: "12px", md: "14px", lg: "18.752px" },
            color: "#197065",
            textTransform: "capitalize",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Image src={backArrow} alt="backArrow" /> Back
        </Button>
        <Tooltip
        open={showTooltip}
        onClose={()=>setShowTooltip(false)}
        title="Please fill in all fields before proceeding."
      >
        <Button
          onClick={handleButtonClick}
          sx={{
            width: "176px",
            borderRadius: "26.267px",
            border: " 0.71px solid #197065",
            fontSize: { xs: "12px", md: "14px", lg: "18.752px" },
            color: "white",
            textTransform: "capitalize",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            bgcolor: "#197065",
            ":hover":{
                bgcolor: "#197065",
            }
          }}
        >
          Next <Image src={NextArrow} alt="NextArrow" />
        </Button>
      </Tooltip>
        
      </Box>
    </>
  );
}
