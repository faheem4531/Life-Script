import Tick from "@/_assets/svg/checked.svg";
// import { default as Box, Divider, default as Typography } from "@mui/material";
import { Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import styles from "./HomeSteps.module.css"


export default function TemplateCard() {

  return (
    <Card sx={{ borderRadius: "6.5px" }}>
      <CardContent sx={{ padding: { xs: "5px 8px 35px" } }}>
        <Typography
          variant="body2"
          color="text "
          fontWeight="600"
          textAlign="center"
          sx={{
            fontSize: "9.383px",
            marginTop: "15px"
          }}
        >
          The Book Of John Doe
        </Typography>
        <Divider
          sx={{
            width: { xs: "116.243px" },
            backgroundColor: "#000",
            height: "2px",
            margin: "9px auto 0",
            marginBottom: { xs: "12px" },
          }}
        />
        <Typography
          display="flex"
          columnGap="10px"
          color="rgba(22, 22, 22, 0.90)"
          marginTop="5px"
          sx={{ columnGap: { sm: "10px", xs: "3px" }, fontSize: "6.239px" }}
        >
          <Image alt="check" src={Tick} className={styles.tick} />
          Winner of the National Academy of Sciences Best Book Award in 2012
        </Typography>
        <Typography
          display="flex"
          columnGap="10px"
          color="rgba(22, 22, 22, 0.90)"
          marginTop="5px"
          sx={{ columnGap: { sm: "10px", xs: "3px" }, fontSize: "6.239px" }}
        >
          <Image alt="check" src={Tick} className={styles.tick} />
          The Worst Job Ever
        </Typography>
        <Typography
          display="flex"
          columnGap="10px"
          color="rgba(22, 22, 22, 0.90)"
          marginTop="5px"
          sx={{ columnGap: { sm: "10px", xs: "3px" }, fontSize: "6.239px" }}
        >
          <Image alt="check" src={Tick} className={styles.tick} />
          The Best Job Ever
        </Typography>
        <Typography
          display="flex"
          columnGap="10px"
          color="rgba(22, 22, 22, 0.90)"
          marginTop="5px"
          sx={{ columnGap: { sm: "10px", xs: "3px" }, fontSize: "6.239px" }}
        >
          <Image alt="check" src={Tick} className={styles.tick} />
          Your Best Employee
        </Typography>
        <Typography
          display="flex"
          columnGap="10px"
          color="rgba(22, 22, 22, 0.90)"
          marginTop="5px"
          sx={{ columnGap: { sm: "10px", xs: "3px" }, fontSize: "6.239px" }}
        >
          <Image alt="check" src={Tick} className={styles.tick} />
          The best project you’ve worked on
        </Typography>
      </CardContent>
    </Card >
  );
}
