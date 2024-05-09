import { Box, Button, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useRouter } from 'next/router';
import GiftPlanCard from './GiftPlanCard';

import { signupWithGift, signupWithInAppGift } from '@/store/slices/authSlice';
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useState } from 'react';

const DeliveryForm = ({ onClick, selectedTab, inAppGiftFlow, newData, setGiftToUser }) => {
  // const [minDate, setMinDate] = useState(new Date());

  // const [giftToUser, setGiftToUser] = useState('')

  console.log("inAppGiftFlow-------", inAppGiftFlow)
  console.log("newData", newData)

  // if(inAppGiftFlow && inAppGiftFlow){
  //   console.log("DeliveryForm====inAppGiftFlow",inAppGiftFlow)
  // }



  // const [sendMessage, setSendMessage] = useState("");
  // const [receiverName, setReceiverName] = useState("");
  // const [selectedDate, setSelectedDate] = useState("");
  const dispatch: any = useDispatch();
  const { t } = useTranslation();
  const router = useRouter();

  // const minDate = new Date();
  const minDate = new Date().toISOString();



  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     sendGiftDate: "",
  //     giftFrom: "",
  //     giftFromName:"",
  //     giftMessage: "",
  //   },
  //   onSubmit: async (values) => {
  //     try {
  //       await dispatch(signupWithGift(values))
  //         .unwrap()
  //         .then((res) => {
  //           // console.log("API Response", res)
  //           // messageField(res?.giftMessage)
  //           // NameField(res?.name)
  //           // DateField(res?.sendGiftDate)

  //           // Storing in localStorage
  //           localStorage.setItem("sendMessage", res?.giftMessage);
  //           localStorage.setItem("receiverName", res?.name);
  //           localStorage.setItem("selectedDate", res?.sendGiftDate);
  //         });
  //       // toast.success(t("signup-page.verificationEmailSent"));

  //       onClick(selectedTab + 1);
  //     } catch (error) {
  //       toast.error(error?.message || t("signup-page.failedSignup"));
  //     }
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup.string().email().required(t("signup-page.emailRequired")),
  //     name: Yup.string().required(t("signup-page.nameRequired")),
  //     sendGiftDate: Yup.date().required("Please select a date"),
  //     giftFrom: Yup.string().email().required("Enter your email"),
  //     giftFromName: Yup.string().required("Enter your name"),
  //     giftMessage: Yup.string().required("Gift message is required"),
  //     // Add more validation rules as needed
  //   }),
  // });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      sendGiftDate: "",
      giftFrom: "",
      giftFromName: "",
      giftMessage: "",
    },
    // onSubmit: async (values) => {
    //   try {
    //     if(inAppGiftFlow && inAppGiftFlow){
    //       console.log("inAppGiftFlowinAppGiftFlowinAppGiftFlowinAppGiftFlow====",inAppGiftFlow )

    //       await dispatch(signupWithInAppGift(values))
    //     }

    //     await dispatch(signupWithGift(values))
    //       .unwrap()
    //       .then((res) => {
    //         // console.log("API Response", res)
    //         // messageField(res?.giftMessage)
    //         // NameField(res?.name)
    //         // DateField(res?.sendGiftDate)

    //         // Storing in localStorage
    //         localStorage.setItem("sendMessage", res?.giftMessage);
    //         localStorage.setItem("receiverName", res?.name);
    //         localStorage.setItem("selectedDate", res?.sendGiftDate);
    //       });
    //     // toast.success(t("signup-page.verificationEmailSent"));

    //     onClick(selectedTab + 1);
    //   } catch (error) {
    //     toast.error(error?.message || t("signup-page.failedSignup"));
    //   }
    // },
    onSubmit: async (values) => {
      try {
        if (inAppGiftFlow === "true") {
          await dispatch(signupWithInAppGift(values)).unwrap()
            .then((res) => {
              console.log("response", res)
              setGiftToUser(res?._id)
              localStorage.setItem("sendMessage", res?.giftMessage);
              localStorage.setItem("receiverName", res?.name);
              localStorage.setItem("selectedDate", res?.sendGiftDate);
            });
        } else {
          // console.log("inAppGiftFlow not present, dispatching signupWithGift");
          await dispatch(signupWithGift(values))
            .unwrap()
            .then((res) => {
              // Store response in localStorage
              localStorage.setItem("sendMessage", res?.giftMessage);
              localStorage.setItem("receiverName", res?.name);
              localStorage.setItem("selectedDate", res?.sendGiftDate);
            });
        }

        // Increment selectedTab
        onClick(selectedTab + 1);
      } catch (error) {
        toast.error(error?.message || t("signup-page.failedSignup"));
      }
    },
    validationSchema: Yup.object({
      email: Yup.string().matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, "Invalid email format").required(t("signup-page.emailRequired")),
      name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Name must contain only letters")
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      sendGiftDate: Yup.date().min(new Date(), "Please select a future date").required("Please select a date"),
      giftFrom: Yup.string().matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, "Invalid email format").required("Sender's email is required"),
      giftFromName: Yup.string().matches(/^[A-Za-z\s]+$/, "Sender's name must contain only letters") 
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
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
                  From Name
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder="Enter your Name"
                  name="giftFromName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.giftFromName}
                  sx={{
                    marginBottom: "10px",
                    width: "100%",
                    bgcolor: "white",
                  }}
                />
                {formik.touched.giftFromName && formik.errors.giftFromName && (
                  <span style={{ color: "red" }}>{formik.errors.giftFromName}</span>
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
