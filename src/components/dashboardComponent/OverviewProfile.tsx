import DemoProfile from "@/_assets/png/demo-Profile.png";
import Bronze from "@/_assets/svg/bronze-token.svg";
import Gold from "@/_assets/svg/gold-token.svg";
import Platinum from "@/_assets/svg/platinum-token.svg";
import Silver from "@/_assets/svg/silver-token.svg";
import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "./Custom.module.css";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        maxWidth: { lg: "326.25px", xs: "100%" },
        width: "100%",
        borderRadius: "19px",
        border: "1px solid #186F65",
        padding: { xs: "32px 28px 44px" },
      }}
    >
      <Box
        sx={{
          maxWidth: {
            lg: "326.25px",
            sm: "70%",
            xs: "100%",
          },
          margin: "auto",
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: { xs: "30px" } }}>
          <Image
            alt="profile"
            src={DemoProfile}
            className={styles.profilePic}
          />
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              marginTop: "17px",
            }}
          >
            Haseeb Khawaja
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
          {t("overView.achivement")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "30px 0 40px",
            columnGap: { xl: "18px", lg: "4px" },
          }}
        >
          <Image
            alt="tag"
            src={Platinum}
            className={styles.profileAchivements}
          />
          <Image alt="tag" src={Gold} className={styles.profileAchivements} />
          <Image alt="tag" src={Silver} className={styles.profileAchivements} />
          <Image alt="tag" src={Bronze} className={styles.profileAchivements} />
        </Box>
        <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
          {t("overView.RecentCh")}
        </Typography>
        <Box sx={{ marginTop: "20px" }}>
          <RecentChapters />
          <RecentChapters />
          <RecentChapters />
          <RecentChapters />
        </Box>
        <Typography
          sx={{
            fontSize: "11.869px",
            color: "#9B9B9B",
            marginTop: "22px",
            textAlign: "center",
          }}
        >
          {t("overView.viewMore")}
        </Typography>
      </Box>
    </Box>
  );
};

export default Profile;

export const RecentChapters = () => {
  return (
    <Box
      sx={{
        bgcolor: "#F9F9F9",
        borderRadius: "8px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderLeft: "10px solid #186F65",
        padding: "8px 13px 8px 20px",
        marginBlock: "11px",
      }}
    >
      <Typography sx={{ fontSize: "10px" }}>The Book Of Early</Typography>
      <CircularWithValueLabel />
    </Box>
  );
};

{
  /* // Progress Bar code */
}
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex", width: "22px" }}>
      <CircularProgress color="success" variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: -15,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="#197065"
          sx={{ fontSize: "6.5px" }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

function CircularWithValueLabel() {
  return <CircularProgressWithLabel value={75} />;
}
