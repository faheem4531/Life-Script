import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import GiftPlanCard from './GiftPlanCard';
import { DatePicker } from '@mui/x-date-pickers';

import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signupWithGift } from '@/store/slices/authSlice';

const DeliveryForm = ({ onClick, selectedTab}) => {

  // const [sendMessage, setSendMessage] = useState("");
  // const [receiverName, setReceiverName] = useState("");
  // const [selectedDate, setSelectedDate] = useState("");
  const dispatch: any = useDispatch();
  const { t } = useTranslation();
  const router = useRouter();


  // const minDate = new Date();
  const minDate = new Date().toISOString();



  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      sendGiftDate: "",
      giftFrom: "",
      giftMessage: "",
    },
    onSubmit: async (values) => {
      try {
        await dispatch(signupWithGift(values))
          .unwrap()
          .then((res) => {
            // console.log("API Response", res)
            // messageField(res?.giftMessage)
            // NameField(res?.name)
            // DateField(res?.sendGiftDate)

            // Storing in localStorage
            localStorage.setItem("sendMessage", res?.giftMessage);
            localStorage.setItem("receiverName", res?.name);
            localStorage.setItem("selectedDate", res?.sendGiftDate);
          });
        // toast.success(t("signup-page.verificationEmailSent"));

        onClick(selectedTab + 1);
      } catch (error) {
        toast.error(error?.message || t("signup-page.failedSignup"));
      }
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(t("signup-page.emailRequired")),
      name: Yup.string().required(t("signup-page.nameRequired")),
      sendGiftDate: Yup.date().required("Please select a date"),
      giftFrom: Yup.string().email().required("Enter your email"),
      giftMessage: Yup.string().required("Gift message is required"),
      // Add more validation rules as needed
    }),
  });



  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box className={'Container'} sx={{ width: '100%', maxWidth: '1370px', margin: { sm: '0 0 30px 70px', xs: '0 20px 30px 20px' } }}>
        <Box>
          <Typography sx={{ fontSize: '40px', marginBottom: '20px' }}>Personalize Your Gift</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            columnGap: '50px',
          }}
        >
          <Box sx={{ maxWidth: { sm: '600px', xs: '100%' }, width: '100%' }}>
            <form onSubmit={formik.handleSubmit}>
              <Box>
                <Typography
                  sx={{
                    color: '#30422E',
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 12 },
                  }}
                >
                  Recipient’s Full Name
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder="Recipient’s Full Name"
                  name="name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  sx={{
                    marginBottom: "10px",
                    width: "100%",
                    bgcolor: "white",
                  }}
                />
                {formik.touched.name && formik.errors.name && (
                  <span style={{ color: "red" }}>{formik.errors.name}</span>
                )}
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: '#30422E',
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 12 },
                  }}
                >
                  Recipient’s Email
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder="Recipient’s Email"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  sx={{
                    marginBottom: "10px",
                    width: "100%",
                    bgcolor: "white",
                  }}
                />
                {formik.touched.email && formik.errors.email && (
                  <span style={{ color: "red" }}>{formik.errors.email}</span>
                )}
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: '#30422E',
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 12 },
                  }}
                >
                  Send my gift on:
                </Typography>
                {/* <DatePicker
                  name='sendGiftDate'
                  value={formik.values.sendGiftDate}
                  // onChange={(date) => setSelectedDate(date)}
                  // onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  minDate={minDate}
                  sx={{
                    width: '100%',
                    backgroundColor: 'white',
                    borderRadius: '2px',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderRadius: '2px',
                      },
                    },
                  }}
                /> */}
                <DatePicker
                  name='sendGiftDate'
                  value={formik.values.sendGiftDate}
                  onChange={(date) => formik.setFieldValue('sendGiftDate', date)}
                  minDate={minDate}
                  sx={{
                    width: '100%',
                    backgroundColor: 'white',
                    borderRadius: '2px',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderRadius: '2px',
                      },
                    },
                  }}
                />
              </Box>
              {formik.touched.sendGiftDate && formik.errors.sendGiftDate && (
                <span style={{ color: "red" }}>{formik.errors.sendGiftDate}</span>
              )}

              <Box>
                <Typography
                  sx={{
                    color: '#30422E',
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 12 },
                  }}
                >
                  From
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder="Enter your Email"
                  name="giftFrom"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.giftFrom}
                  sx={{
                    marginBottom: "10px",
                    width: "100%",
                    bgcolor: "white",
                  }}
                />
              {formik.touched.giftFrom && formik.errors.giftFrom && (
                  <span style={{ color: "red" }}>{formik.errors.giftFrom}</span>
                )}
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: '#30422E',
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 12 },
                  }}
                >
                  Your Message
                </Typography>
                <TextField
                  placeholder="Hello, I've gifted you a LifeScript subscription, allowing you to easily share and preserve your stories in a beautiful hardcover book."
                  multiline
                  rows={7} // This sets the initial number of rows
                  name="giftMessage"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.giftMessage}
                  sx={{ width: '100%', backgroundColor: '#FAFAFA' }}
                />
                {formik.touched.giftMessage && formik.errors.giftMessage && (
                  <span style={{ color: "red" }}>{formik.errors.giftMessage}</span>
                )}
              </Box>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  width: '200px',
                  marginTop: '50px',
                  bgcolor: '#e1693b',
                  '&:hover': {
                    backgroundColor: '#b5522d',
                  },
                }}
              >
                Continue
              </Button>
            </form>
          </Box>

          <Box
            sx={{
              margin: '0 35px 35px 0',
              display: { md: 'block', sm: 'none', xs: 'none' },
            }}
          >
            <GiftPlanCard
              price={router.query.price}
              category={router.query.category}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DeliveryForm;
