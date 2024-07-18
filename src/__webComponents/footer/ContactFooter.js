'use client '
import { Box, Typography, TextField } from "@mui/material"
import Image from "next/image"
import styles from "../ComponentsStyles.module.css"
import Smily from "@/__webAssets/svgs/smily.svg"
import Button from "../button/Button"
import Input from "../input/Input"
import Line from "@/__webAssets/svgs/line-white.svg"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Shape from "@/__webAssets/svgs/input-shape.svg"
import { useState } from "react"

import { toast, ToastContainer } from "react-toastify"
import { useDispatch } from "react-redux"
import { contact } from "@/store/slices/authSlice"






const ContactFooter = ({ title, date = false, subTitle, input1, input2, input3, button, shape, marked, lineWidth }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    description: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    description: ''
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    // Check for required fields
    if (!formValues.name.trim()) newErrors.name = 'Name is required';

    // Email validation for input2
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formValues.email)) {
      newErrors.email = 'Email must be a valid email address';
    }

    // Check for required fields
    if (!date && !formValues.description.trim()) newErrors.description = 'Date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {

    
    if (validate()) {
      try {

     
        const res =  await dispatch(contact(formValues)).unwrap()
        if(res){
          toast.success(res);
          setFormValues({
            name: '',
            email: '',
            description: ''
          });
          
        }

      } catch (error) {
        console.error('Error:', error);
        toast.error(error.message || 'Failed to submit the form');
      }
    }
  };



  return (
    <Box
      sx={{
        padding: { md: "70px 40px 50px", sm: "70px 30px 50px", xs: "40px 20px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#F3ECDA",
        position: "relative",
        zIndex: "10"
      }}
      className={styles.contactFooterBox}
      id="ContactUs"
    >
      <Box sx={{
        fontSize: { md: "54px", sm: "44px", xs: "32px" },
        textAlign: "center",
        fontWeight: 500,
        fontFamily: "Besley !important",
      }}
      >
        {title} {" "}
        <Box sx={{ display: "inline", position: "relative" }}>
          {marked}
          <Box sx={{ maxWidth: "180px", position: "absolute", right: { sm: "-10px", xs: "-10px" }, bottom: { sm: "-30px", xs: "-20px" } }}>
            <Image src={Line} alt="line" className={styles.footerLine} width={lineWidth} loading='lazy' />
          </Box>
        </Box>
      </Box>

      <Typography sx={{ fontSize: "16px", textAlign: "center", fontWeight: 500, marginTop: "30px", fontFamily: "Avenir" }}>
        {subTitle}
      </Typography>

      <Box sx={{
        display: "flex",
        columnGap: "8px",
        rowGap: "20px",
        flexDirection: { sm: "row", xs: "column" },
        margin: { sm: "55px 0 40px", xs: "35px 0 20px" },
        width: "100%",
        justifyContent: "center"
      }} >
        <Box sx={{ width: { sm: "375px", xs: "100%" } }}>
          <TextField
            name="name"
            value={formValues.name}
            onChange={handleChange}
            placeholder={input1}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
            sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: 'white',
                }, borderRadius: "5px"
              }}


          />
        </Box>
        <Box sx={{ width: { sm: "375px", xs: "100%" } }}>
          <TextField
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder={input2}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
            sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: 'white',
                }, borderRadius: "5px"
              }}

          />
        </Box>
        <Box sx={{ width: { sm: "375px", xs: "100%" } }}>
          {date ?
            <GetDate />
            :
            <TextField
              name="description"
              value={formValues.description}
              onChange={handleChange}
              placeholder={input3}
              error={!!errors.description}
              helperText={errors.description}
              fullWidth
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: 'white',
                }, borderRadius: "5px"
              }}

            />
          }
        </Box>
      </Box>

      <Box sx={{ width: { sm: "200px", xs: "100%" } }}>
        <Button
          title={button}
          width='100%'
          height='50px'
          backgroundColor="#30422E"
          img2={Smily}
          bgHover="#1D291C"
          onClick={handleSubmit}

        />
      </Box>
      <ToastContainer />
    </Box>
  );
}

export default ContactFooter;







function GetDate() {
  const [isOpen, setIsOpen] = useState(false);

  function handleCalander() {
    setIsOpen((pre) => !pre)
  }

  return (
    <Box sx={{ position: "relative" }} onClick={handleCalander}>
      <Box sx={{
        bgcolor: "#f5f5f5",
        position: "absolute",
        right: "10px",
        zIndex: "100",
        top: "15px",
        cursor: "pointer",
      }}
        onClick={handleCalander}
      >
        <CustomCalendarIcon />
      </Box>

      <DatePicker sx={{
        bgcolor: "#f5f5f5",
        borderRadius: "2px",
        width: "100%",
        color: "#7e7e7e",
        border: "none"
      }}
        open={isOpen}
        label="When it's happening?"
      />
    </Box>
  );
}


const CustomCalendarIcon = () => (
  <Image src={Shape} alt="Calendar" width={26} height={24} />
);