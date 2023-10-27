import React, { useState, useEffect } from "react";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Image from "next/image";
import LoginImage from "../../../public/Login.svg";
import Logo from "../../../public/logo.svg";
import Button from "@mui/material/Button";

const Login = () => {
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
      <Grid item xs={12} sm={6} textAlign={"center"}>
        <Box sx = {{width : {md : "300px", xs : "200px"}, height : {md : "300px", xs : "200px"}}}> 
             <Image src={LoginImage} width={500} height={600} alt="Login Image" />
             </Box>

      </Grid>

      <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
        <Image src={Logo} width={184} height={100} alt="Logo Image" />
        <Box sx={{ marginTop: "70px" }}>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>

          <Typography sx={{ marginRight: "300px", marginTop: "10px" }}>
            User name
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Enter Your E-mail"
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
              Password
            </Typography>
            <TextField
              sx={{
                marginTop: "15px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px", // Adjust the border radius as needed
                },
                width: "400px",
              }}
              placeholder="Password"
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
                marginTop: "10px",
                marginLeft: { sm: "", md: "120px" },
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
              marginTop: "20px",
              "&:hover": {
                backgroundColor: "#186F65", 
              },
            }}
          >
            Login
          </Button>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
        >
          <Box>
            <Divider
              sx={{
                marginTop: "10px",

                backgroundColor: "black",
                width: "97px",
              }}
              orientation="horizontal"
            />
          </Box>
          <Box>
            <Typography sx={{ marginLeft: "10px" }}>Or Login with</Typography>
          </Box>
          <Box>
            <Divider
              sx={{
                marginTop: "10px",
                marginLeft: "10px",
                backgroundColor: "black",
                width: "97px",
              }}
              orientation="horizontal"
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
