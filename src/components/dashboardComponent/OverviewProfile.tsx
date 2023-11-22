import { Box, Typography } from "@mui/material"
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./Custom.module.css"
import Image from "next/image"
import DemoProfile from "@/_assets/png/demo-Profile.png"
import Platinum from "@/_assets/svg/platinum-token.svg"
import Gold from "@/_assets/svg/gold-token.svg"
import Silver from "@/_assets/svg/silver-token.svg"
import Bronze from "@/_assets/svg/bronze-token.svg"


const Profile = () => {
  return (
    <Box sx={{
      bgcolor: "#fff",
      maxWidth: "435px",
      width: "100%",
      borderRadius: "19px",
      border: "1px solid #186F65",
      padding: "32px 28px 85px"
    }}>
      <Box sx={{ textAlign: "center", marginBottom: "55px" }}>
        <Image alt="profile" src={DemoProfile} className={styles.profilePic} />
        <Typography sx={{
          fontSize: "26px",
          fontWeight: 700,
          marginTop: "23px"
        }}>Haseeb Khawaja</Typography>
      </Box>
      <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
        Achievement
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", margin: "30px 0 55px" }}>
        <Image alt="tag" src={Platinum} />
        <Image alt="tag" src={Gold} />
        <Image alt="tag" src={Silver} />
        <Image alt="tag" src={Bronze} />
      </Box>
      <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
        Recent Chapters
      </Typography>
      <Box sx={{ marginTop: "30px" }}>
        <RecentChapters />
        <RecentChapters />
        <RecentChapters />
        <RecentChapters />
      </Box>
      <Typography sx={{ fontSize: "15px", color: "#9B9B9B", marginTop: "30px", textAlign: "center" }}>
        View more
      </Typography>
    </Box>
  )
}


export default Profile




export const RecentChapters = () => {
  return (
    <Box sx={{
      bgcolor: "#F9F9F9",
      borderRadius: "8px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderLeft: "10px solid #186F65",
      padding: "13px 13px 13px 20px",
      marginBlock: "15px"
    }}>
      <Typography sx={{ fontSize: "14px" }}>
        The Book Of Early
      </Typography>
      <CircularWithValueLabel />
    </Box>
  )
}



{
  /* // Progress Bar code */
}
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex", width: "30px" }}>
      <CircularProgress color="success" variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: -8,
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
          sx={{ fontSize: "10px" }}
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
