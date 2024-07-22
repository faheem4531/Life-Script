// import { LoginData } from "@/interface/authInterface";
// import { Box, Typography } from "@mui/material";

// import { useFormik } from "formik";
// import Image from "next/image";
// import { useState } from "react";
// import * as Yup from "yup";
// import Forget from "../../../public/ForgetPasswod.svg";
// import Logo from "../../../public/logo.svg";

// const ForgetPasswordLink = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//   };

//   const handleRememberMeChange = (event: any) => {
//     setRememberMe(event.target.checked);
//   };

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     onSubmit: async (data: LoginData) => {

//     },
//     validationSchema: Yup.object({
//       email: Yup.string().email().required("Email is required"),
//       password: Yup.string().required("Password is required"),
//     }),
//   });

//   return (
//     <Box sx={{ display: "flex", justifyContent: "space-around" }}>
//       <Box sx={{ margin: 0 }}>
//         <Image src={Forget} alt="image of login" width={650} height={700} />
//       </Box>

//       <Box>
//         <Box textAlign={"center"}>
//           <Image src={Logo} width={223} height={135} alt="Logo Image" />
//           <Typography
//             sx={{ color: "#000000", fontSize: "30px", marginTop: "50" }}
//           >
//             Forgot Password?{" "}
//           </Typography>
//         </Box>
//         <Box sx={{ marginTop: "180px" }}>
//           <Box>
//             <Typography
//               sx={{
//                 color: "#5B5B5B",
//                 fontSize: "21px",
//                 justifyContent: "left",
//               }}
//             >
//               Reset Password link has been sent to <br />
//               JohnDoe01@gmail.com. Please click on the link to <br /> reset your
//               password
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ForgetPasswordLink;
