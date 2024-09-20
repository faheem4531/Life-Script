import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import Logo from "@/_assets/svg/lifeScript-logo.svg";
import Carousel2 from "../../../public/carousel.png";
import Carousel1 from "../../../public/carousel1.png";
import Carousel3 from "../../../public/carousel3.png";
import Carousel from "../../components/authComponent/Carousel";

const ForgetPasswordLink = () => {
  const router = useRouter();
  const { email } = router.query;
  const { t } = useTranslation();

  const carouselItems = [
    { path: Carousel1, alt: "Login Image" },
    { path: Carousel2, alt: "Signup Image" },
    { path: Carousel3, alt: "Signup Image" },

    // Add more images as needed
  ];

  return (
    <Box
      sx={{
        display: "grid",
        alignItems: "center",
        gridTemplateColumns: {
          md: "repeat(2, minmax(0, 1fr))",
          xs: "repeat(1, minmax(0, 1fr))",
        },
        gap: "1rem",
        backgroundColor: "#FFF7EA",
        height: "100dvh",
        p: "20px",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ height: "auto", display: { md: "block", xs: "none" } }}>
        <Carousel items={carouselItems} />
      </Box>

      <Box
        sx={{
          maxWidth: "500px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Box textAlign={"center"}>
          <Image src={Logo} width={320} height={47} alt="Logo Image" />
          <Typography
            sx={{ color: "#30422E", fontSize: "30px", marginTop: "100px" }}
          >
            {t("ForgetPassswordLink.forgotPassword")}
          </Typography>
        </Box>
        <Box sx={{ marginTop: "100px" }}>
          <Box>
            <Typography
              sx={{
                color: "#5B5B5B",
                fontSize: "21px",
                justifyContent: "left",
              }}
            >
              {t("ForgetPassswordLink.resetPassword")} <br />
              {email}. {t("ForgetPassswordLink.clickLink")}
              <br /> {t("ForgetPassswordLink.reset")}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgetPasswordLink;
