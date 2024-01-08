import BgRounded from "@/_assets/png/overview-welcome-bg.png";
import Welcome from "@/_assets/png/overview-welcome-card.png";
import ContineWriting from "@/_assets/svg/continue-writing.svg";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Button from "../button/Button";
import styles from "./Custom.module.css";

const WelcomeOverview = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#197065",
        color: "#fff",
        borderRadius: "14px",
        padding: { xl: "20px 30px", lg: "15px 25px", xs: "12px 20px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // maxWidth: "1149px",
        width: "100%",
        maxHeight: "230px",
        // minWidth: "700px",
        position: "relative",
        overflow: "hidden",
      }}
      className={styles.welcomeMain}
    >
      <Box>
        <Typography sx={{ fontSize: "18.75px" }}> Welcome back ...</Typography>
        <Typography
          sx={{
            fontSize: { xl: "33px", sm: "28px" },
            lineHeight: "120%",
            fontWeight: 700,
          }}
        >
          {" "}
          Haseeb!
        </Typography>
        <Typography
          sx={{
            fontSize: { xl: "14px", sm: "12px" },
            fontWeight: 300,
            lineHeight: "150%",
            marginBottom: "20px",
            color: "#a8c9c5",
            marginTop: "10px",
          }}
        >
          “Success is not final, failure is not fatal: It is the courage to
          continue that counts.”
        </Typography>
        <Button
          image={ContineWriting}
          btnText="| Continue Writing"
          bgColor="#fff"
          borderRadius="23px"
          color="#186F65"
          width="180px"
          fontSize={{ xs: "12px" }}
          onClick={() => {}}
          border="0px"
          // onClick={() => {}}
        />
      </Box>
      <Box
        sx={{
          display: { sm: "block", xs: "none" },
        }}
      >
        <Image alt="Welcome" src={Welcome} className={styles.welcomeImage} />
        <Image alt="Welcome" src={BgRounded} className={styles.bgRounded} />
      </Box>
    </Box>
  );
};

export default WelcomeOverview;
