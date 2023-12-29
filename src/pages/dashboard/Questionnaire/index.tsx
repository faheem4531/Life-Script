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
            width: "343px",
            height: "343px",
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
            fontSize: "44px",
            fontWeight: 700,
            lineHeight: "54px",
          }}
        >
          Hello, I am Alice
        </Typography>
        <Box>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 700,
              color: "rgba(255, 255, 255, 0.60)",
              mt: "20px",
            }}
          >
            Hi {userName}, Thank you for embarking on this journey!
          </Typography>

          <Typography
            sx={{
              fontSize: "24px",
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
            width: "80px",
            margin: "auto",
            cursor: "pointer",
          }}
          onClick={() => {
            router.push(
              `/dashboard/Questionnaire/QuestionnaireLanding?userName=${userName}`
            );
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 600,
              lineHeight: "54px",
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
