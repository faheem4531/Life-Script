import React, { useState, useEffect } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SignupImage from "../../../public/Signup.svg";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Button from "@mui/material/Button";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
        <Image src={SignupImage} width={500} height={600} alt="Signup Image" />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
        <Image src={Logo} width={184} height={100} alt="Logo Image" />
        <Box sx={{ marginTop: "70px" }}>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>

          <Typography sx={{ marginRight: "280px", marginTop: "10px" }}>
            Email Address
          </Typography>
          <TextField
            variant="outlined"
            label="Email"
            sx={{
              marginTop: "15px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px", // Adjust the border radius as needed
              },
              width: "400px",
            }}
          />
          <Typography sx={{ marginRight: "300px", marginTop: "10px" }}>
            User name
          </Typography>
          <TextField
            variant="outlined"
            label="UserName"
            sx={{
              marginTop: "15px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px", // Adjust the border radius as needed
              },
              width: "400px",
            }}
          />
          <Box>
            <Typography sx={{ marginTop: "10px", marginRight: "300px" }}>
              {" "}
              Password
            </Typography>
            <TextField
              sx={{
                marginTop: "10px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px", // Adjust the border radius as needed
                },
                width: "400px",
              }}
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box
              sx={{
                display: "flex",
                gap: 15,
                marginTop: "5px",
                marginLeft: "120px",
              }}
            >
              <Box>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                      color="primary"
                    />
                  }
                  label="Remember Me"
                />
              </Box>
              <Box>
                <Typography sx={{ marginTop: "9px" }}>
                  Forgot Password?
                </Typography>
              </Box>
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{
              borderRadius: "10px",
              backgroundColor: "#186F65",
              color: "white",
              width: "300px",
              marginTop: "10px",
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
