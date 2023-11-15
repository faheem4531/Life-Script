import Tick from "@/_assets/svg/checked.svg";
// import { default as Box, Divider, default as Typography } from "@mui/material";
import { Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import styles from "./HomeSteps.module.css"


export default function TemplateCard() {

  return (
    <Card sx={{ maxWidth: 400, borderRadius: "6.5px" }}>
      <CardContent sx={{ padding: { xs: "5px 5px 35px 5px" } }}>
        <Typography
          variant="body2"
          color="text "
          fontWeight="600"
          textAlign="center"
          sx={{
            fontSize: { sm: "19px", xs: "12px" },
            marginTop: { sm: "10px", xs: "0px" }
          }}
        >
          The Book Of John Doe
        </Typography>
        <Divider
          sx={{
            width: { sm: "245px", xs: "150px" },
            backgroundColor: "#000",
            height: "2px",
            margin: "9px auto 0",
            marginBottom: { sm: "30px", xs: "12px" },
          }}
        />
        <Typography
          display="flex"
          columnGap="10px"
          color="rgba(22, 22, 22, 0.90)"
          marginTop="5px"
          sx={{ columnGap: { sm: "10px", xs: "3px" }, fontSize: { sm: "10px", xs: "7px" } }}
        >
          <Image alt="check" src={Tick} className={styles.tick} />
          Winner of the National Academy of Sciences Best Book Award in 2012
        </Typography>
        <Typography
          display="flex"
          columnGap="10px"
          color="rgba(22, 22, 22, 0.90)"
          marginTop="5px"
          sx={{ columnGap: { sm: "10px", xs: "3px" }, fontSize: { sm: "10px", xs: "7px" } }}
        >
          <Image alt="check" src={Tick} className={styles.tick} />
          The Worst Job Ever
        </Typography>
        <Typography
          display="flex"
          columnGap="10px"
          color="rgba(22, 22, 22, 0.90)"
          marginTop="5px"
          sx={{ columnGap: { sm: "10px", xs: "3px" }, fontSize: { sm: "10px", xs: "7px" } }}
        >
          <Image alt="check" src={Tick} className={styles.tick} />
          The Best Job Ever
        </Typography>
        <Typography
          display="flex"
          columnGap="10px"
          color="rgba(22, 22, 22, 0.90)"
          marginTop="5px"
          sx={{ columnGap: { sm: "10px", xs: "3px" }, fontSize: { sm: "10px", xs: "7px" } }}
        >
          <Image alt="check" src={Tick} className={styles.tick} />
          Your Best Employee
        </Typography>
        <Typography
          display="flex"
          columnGap="10px"
          color="rgba(22, 22, 22, 0.90)"
          marginTop="5px"
          sx={{ columnGap: { sm: "10px", xs: "3px" }, fontSize: { sm: "10px", xs: "7px" } }}
        >
          <Image alt="check" src={Tick} className={styles.tick} />
          The Best Project You've Worked On
        </Typography>
      </CardContent>
    </Card >
  );
}
