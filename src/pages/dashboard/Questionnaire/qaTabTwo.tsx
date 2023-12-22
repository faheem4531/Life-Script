import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import backButton from "../../../../src/_assets/svg/back.svg";
import nextButton from "../../../../src/_assets/svg/next.svg";

export default function TabTwo({ onClick }) {
  const [maritalStatus, setMaritalStatus] = useState("Single");
  const [gender, setGender] = useState("Male");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [name, setName] = useState("");

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
        <Grid container spacing={2}>
          {/* First row with two text fields */}
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={6}>
              <Box>
                <TextField
                  variant="outlined"
                  placeholder="Full Name"
                  name="email"
                  value={name}
                    onChange={(e) => setName(e.target.value) }
                  sx={{
                    marginTop: "10px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                      backgroundColor: "white",
                    },
                    width: { sm: "450px", xs: "250px" },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Select
                  placeholder="Marital Status"
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  sx={{
                    marginTop: "10px",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    width: { sm: "450px", xs: "250px" },
                  }}
                >
                  <MenuItem value="Single">Single</MenuItem>
                  <MenuItem value="Married">Married</MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>

          {/* Second row with two text fields */}
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={6}>
              <Box>
                <Select
                  placeholder="Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  sx={{
                    marginTop: "10px",
                    backgroundColor: "white",
                    width: { sm: "450px", xs: "250px" },
                    borderRadius: "50px",
                  }}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Special">Special</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <DatePicker
                value={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                sx={{
                  marginTop: "10px",
                  backgroundColor: "white",
                  width: { sm: "450px", xs: "250px" },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderRadius: '50px',
                    },
                  },
                }}
              />
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
          gap: 2,
        }}
      >
        <Button onClick={onClick}>
        <Image src={backButton} alt="Next" />
        </Button>
        <Button><Image src={nextButton} alt="Next" /></Button>
      </Box>
    </>
  );
}
