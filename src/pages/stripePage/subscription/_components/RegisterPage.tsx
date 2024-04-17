"use client";

import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import { useFormik } from "formik";
import Image from "next/image";
import * as Yup from "yup"; 
import googleLogo from "../../../../../public/googleIcon.svg";
import facebookIcon from "../../../../../public/facebookIcon.svg";

import BasicPlanCard from "../_components/BasicPlanCard"

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission here, e.g., make an API call
      console.log(values);
    },
  });

  return (

    <Box sx={{display:"flex", justifyContent:"space-between"}}>
    <Box 
    sx={{marginLeft:"100px", border:"2px soild green", width:"50%"}}
    >
      <Typography variant="h4" sx={{marginBottom:"30px"}}>Register LifeScript</Typography>

      <Box sx={{width:"530px"}}>
        <form onSubmit={formik.handleSubmit}>
          <Box>
            <Typography
              sx={{
                color: "#30422E",
                fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
              }}
            >
              Name
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter your full name"
              name="name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              sx={{
                marginBottom: "10px",
                width: "100%",
                bgcolor:"white"
              }}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#30422E",
                fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
              }}
            >
              Email
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter your email address"
              name="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{
                marginBottom: "10px",
                width: "100%",
                bgcolor:"white"
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Box>
              <Divider
                sx={{
                  marginTop: "10px",

                  backgroundColor: "black",
                  width: "240px",
                }}
                orientation="horizontal"
              />
            </Box>
            <Box>
              <Typography sx={{ marginLeft: "10px", color: "#0000006B" }}>
                {"or"}
              </Typography>
            </Box>
            <Box>
              <Divider
                sx={{
                  marginTop: "10px",
                  marginLeft: "10px",
                  backgroundColor: "black",
                  width: "240px",
                }}
                orientation="horizontal"
              />
            </Box>
          </Box>

          <Box
          sx={{
            display: "flex",
            flexDirection:"column",
            gap: 1,
            justifyContent: "center",
          }}
        >
          <Box 
        //   sx={{ width: { md: "60%", sm: "100%", xs: "70%" } }}
          >
            <Button
              variant="contained"
              type="submit"
            //   onClick={() => handleGoogleLogin()}
              sx={{
                borderRadius: "2px",
                backgroundColor: "#fff",
                padding: "10px 0",
                color: "#30422E",
                width: "530px",
                gap: "10px",
                marginTop: { xs: "20px" },
                "&:hover": {
                  backgroundColor: "white",
                },
                textTransform: "capitalize",
              }}
            >
              <Image
                src={googleLogo}
                alt="Google Logo"
              // width={24}
              // height={24}
              />
              <Typography>Login with Google</Typography>
            </Button>
          </Box>

          {/* Login With Facebook */}
          <Box 
        //   sx={{ width: { md: "60%", sm: "100%", xs: "70%" } }}
          >
            <Button
              variant="contained"
              type="submit"
            //   onClick={() => handleGoogleLogin()}
              sx={{
                borderRadius: "2px",
                backgroundColor: "#fff",
                padding: "10px 0",
                color: "#30422E",
                width: "530px",
                gap: "10px",
                marginTop: { xs: "20px" },
                "&:hover": {
                  backgroundColor: "white",
                },
                textTransform: "capitalize",
              }}
            >
              <Image
                src={facebookIcon}
                alt="Facebook Logo"
              // width={24}
              // height={24}
              />
              <Typography>Login with Facebook</Typography>
            </Button>
          </Box>
        </Box>

          <Button type="submit" variant="contained" color="primary"  sx={{ marginTop: "20px" ,bgcolor:"#e1693b" , "&:hover": {
                backgroundColor: "#b5522d",
              }, }}>
            Continue
          </Button>
        </form>
      </Box>
    </Box>

    <Box sx={{border:"2px solid red", width:"50%"}}>

        <Box>
        <BasicPlanCard/>

        </Box>
    </Box>

    </Box>
  );
};

export default RegisterPage;
