import { Box, Grid, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";

import Logo from "@/_assets/svg/lifeScript-logo.svg";
import TransitionsDialog from "@/components/modal/TransitionDialog";
import { ForgetPass } from "@/interface/authInterface";
import { forgetPassword } from "@/store/slices/authSlice";
import { useCarouselSliderImages } from "@/utils/webContent";
import Carousel from "../../components/authComponent/Carousel";

const ForgetPassword = () => {
  const [sentFailed, setSentFailed] = useState(false);
  const dispatch: any = useDispatch();
  const [saveEmail,setSaveEmail]=useState("")
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      email: "",
      type: "password",
    },
    onSubmit: async (data: ForgetPass) => {
      setSentFailed(false);
      dispatch(forgetPassword(data))
        .unwrap()
        .then(() => {
          setSaveEmail(formik.values.email)
          toast.success(t("ForgetPassword.emailSentSuccessfully"));
          setOpenModal(true)
        })
        .catch((error: any) => {
          setSentFailed(true);
        });
        formik.resetForm({ values: { email: "", type: "password" } })
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(t("ForgetPassword.emailRequired")),
    }),
  });

  return (
    <>
      <Grid
        sx={{
          display: "grid",
          backgroundColor: "#FFF7EA",
          alignItems: "center",
          gridTemplateColumns: {
            md: "repeat(2, minmax(0, 1fr))",
            xs: "repeat(1, minmax(0, 1fr))",
          },
          gap: "1rem",
          p: "20px",
          height: "100dvh",
          overflowY: "scroll",
          color: "#000",
        }}
      >
        <Box sx={{ height: "auto", display: { md: "block", xs: "none" } }}>
          <Carousel items={useCarouselSliderImages} />
        </Box>
        <Box
          sx={{
            maxWidth: "500px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Box textAlign={"center"}>
            <Image src={Logo} width={320} alt="Logo Image" />
            <Typography
              sx={{ color: "#30422E", fontSize: "30px", marginTop: "50px" }}
            >
              {t("ForgetPassword.forgotPassword?")}
            </Typography>
          </Box>
          <Box sx={{ marginTop: "70px" }}>
            <Box sx={{ marginBottom: "14px" }}>
              <Typography
                sx={{ marginTop: "23px", color: "#30422E", fontSize: "21px" }}
              >
                {t("ForgetPassword.enterEmail")}
              </Typography>
              <Typography
                sx={{
                  marginTop: "34px",
                  fontSize: "21px",
                  color: "#30422E"
                }}
              >
                {t("ForgetPassword.email")}
              </Typography>
              <TextField
                variant="outlined"
                name="email"
                placeholder={t("ForgetPassword.enter-email")}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                sx={{
                  marginTop: "15px",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: "2px",
                  },
                  width: "100%",
                }}
              />
            </Box>
            {formik.touched.email && formik.errors.email && (
              <span style={{ color: "red" }}>{formik.errors.email}</span>
            )}
            {sentFailed && (
              <Box sx={{ mt: 2 }}>
                <Typography sx={{ color: "red" }}>
                  {t("ForgetPassword.userNotFound")}
                </Typography>
              </Box>
            )}

            <Box
              sx={{
                justifyContent: "center",
                textAlign: "center",
                marginTop: "60px",
              }}
            >
              <Button
                variant="contained"
                onClick={(event) => formik.handleSubmit()}
                type="submit"
                sx={{
                  borderRadius: "2px",
                  backgroundColor: "#30422E",
                  color: "white",
                  width: "300px",
                  padding: "15px",
                  "&:hover": {
                    backgroundColor: "#30422E",
                  },
                  textTransform: "Capitalize",
                }}
              >
                {t("ForgetPassword.continue")}
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>

      <TransitionsDialog
        open={openModal}
        heading={`${t("ForgetPassswordLink.forgotPassword")}`}
        description={`${t("ForgetPassswordLink.resetPassword")} 
              ${saveEmail}${"."} ${t("ForgetPassswordLink.clickLink")}
            ${t("ForgetPassswordLink.reset")}`}
        closeModal={() => setOpenModal(false)}
        buttons={false}
        cancel={() => { }}
        proceed={() => { }}
      />
    </>

  );
};

export default ForgetPassword;
