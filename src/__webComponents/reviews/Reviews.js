import Stars from "@/__webAssets/pngs/review-stars.png";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const Reviews = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        bgcolor: "#30422E",
        color: "#F3ECDA",
        textAlign: "center",
        padding: { sm: "44px 30px 30px", xs: "44px 20px 40px" },
        fontSize: "16px",
        display: "flex",
        flexDirection: { sm: "column", xs: "column-reverse" },
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: "10",
      }}
    >
      <Image src={Stars} alt="rating" loading="lazy" />
      <Box
        sx={{
          display: "flex",
          margin: { sm: "40px", xs: "40px 0 40px" },
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { sm: "128px", xs: "96px" },
            bgcolor: "red",
            alignSelf: "start",
            rotate: "12deg",
            lineHeight: "0",
          }}
        >
          &#34;
        </Typography>
        <Box sx={{ maxWidth: "850px" }}>
          <Typography sx={{ fontFamily: "Avenir" }}>
            {t("landingPage.reviewSection.Description")}
          </Typography>
          <Typography sx={{ fontWeight: 900, marginTop: "20px" }}>
            {t("landingPage.reviewSection.author")}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: { sm: "128px", xs: "96px" },
            rotate: "12deg",
            lineHeight: "0",
            alignSelf: "end",
          }}
        >
          &#34;
        </Typography>
      </Box>
    </Box>
  );
};

export default Reviews;
