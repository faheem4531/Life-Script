import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import Profile from "../../../_assets/svg/profile.svg";
import styles from "./Questionnaire.module.css";

const QuestionnaireLanding = () => {
  const router = useRouter();
  const { userName } = router.query;
  return (
    <Box className={styles.QuestionnaireLandingMain}>
      <Box
        sx={{
          width: "70%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: { md: "343px", sm: "200px", xs: "120px" },
            height: { md: "343px", sm: "200px", xs: "120px" },
            borderRadius: "50%",
            margin: "0px auto 20px",
          }}
        >
          <Image
            src={Profile}
            alt=""
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: { md: "44px", sm: "36px", xs: "26px" },
            fontWeight: 700,
          }}
        >
          Hello, I am Alice
        </Typography>
        <Box>
          <Typography
            sx={{
              fontSize: { md: "24px", sm: "18px", xs: "14px" },
              fontWeight: 700,
              color: "rgba(255, 255, 255, 0.60)",
              mt: "20px",
            }}
          >
            Hi {userName}, Thank you for embarking on this journey!
          </Typography>

          <Typography
            sx={{
              fontSize: { md: "24px", sm: "18px", xs: "14px" },
              fontWeight: 700,
              color: "rgba(255, 255, 255, 0.60)",
              mt: "20px",
            }}
          >
            We are going to need your help answering a quick questionnaire that
            would personalize your book questions and experience. Thank you for
            answering!
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: "30px",
            justifyContent: "space-between",
            width: { md: "80px", sm: "65px", xs: "60px" },
            margin: "auto",
            cursor: "pointer",
          }}
          onClick={() => {
            router.push(
              `/dashboard/Questionnaire/QuestionnaireLanding`
            );
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "22px", sm: "16px", xs: "15px" },
              fontWeight: 600,
              color: "rgba(255, 255, 255, 0.60)",
              textDecoration: "underline",
            }}
          >
            Next
          </Typography>
          {/* <Image src={NextArrow} alt="NextArrow" /> */}
          <span
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "rgba(255, 255, 255, 0.60)",
            }}
          >
            &#8594;
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionnaireLanding;
