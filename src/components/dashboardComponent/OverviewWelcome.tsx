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
        borderRadius: { sm: "24px", xs: "5px" },
        padding: { sm: "30px 50px", xs: "17px 30px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1149px",
        width: "100%",
      }}
      className={styles.welcomeMain}
    >
      <Box>
        <Typography sx={{ fontSize: "25px" }}> Welcome back ...</Typography>
        <Typography sx={{ fontSize: "45px", fontWeight: 700 }}>
          {" "}
          Haseeb!
        </Typography>
        <Typography
          sx={{
            fontSize: "19px",
            fontWeight: 300,
            lineHeight: "150%",
            marginBottom: "20px",
            color: "#a8c9c5",
          }}
        >
          “Success is not final, failure is not fatal: It is the courage to
          continue that counts.”
        </Typography>
        <Button
          image={ContineWriting}
          title="Continue Writing"
          background="#fff"
          borderRadius="23px"
          color="#186F65"
          padding="10px 18px"
          onClick={() => {}}
          border={undefined}
          width={undefined}
          fontSize={undefined}
        />
      </Box>

      <Image alt="Welcome" src={Welcome} className={styles.welcomeImage} />
    </Box>
  );
};

export default WelcomeOverview;
