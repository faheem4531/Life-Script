import Tick from "@/_assets/svg/checked.svg";
// import { default as Box, Divider, default as Typography } from "@mui/material";
import { Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
export default function TemplateCard() {
  return (
    <Card sx={{ maxWidth: 500, borderRadius: "6.5px" }}>
      <CardContent>
        <Typography
          variant="body2"
          color="text "
          fontWeight="600"
          fontSize="19px"
          textAlign="center"
          marginTop="10px"
        >
          The Book Of John Doe
        </Typography>
        <Divider
          sx={{
            width: "245px",
            backgroundColor: "#000",
            height: "2px",
            margin: "9px auto 0",
            marginBottom: "30px",
          }}
        />
        <Typography
          display="flex"
          alignItems="center"
          columnGap="10px"
          color="rgba(22, 22, 22, 0.90)"
          fontSize="10px"
          marginTop="5px"
        >
          <Image alt="check" src={Tick} />
          Winner of the National Academy of Sciences Best Book Award in 2012
        </Typography>
        <Typography
          display="flex"
          alignItems="center"
          columnGap="10px"
          color="rgba(22, 22, 22, 0.90)"
          fontSize="10px"
          marginTop="5px"
        >
          <Image alt="check" src={Tick} />
          The Worst Job Ever
        </Typography>
        <Typography
          display="flex"
          alignItems="center"
          columnGap="10px"
          color="rgba(22, 22, 22, 0.90)"
          fontSize="10px"
          marginTop="5px"
        >
          <Image alt="check" src={Tick} />
          The Best Job Ever
        </Typography>
        <Typography
          display="flex"
          alignItems="center"
          columnGap="10px"
          color="rgba(22, 22, 22, 0.90)"
          fontSize="10px"
          marginTop="5px"
        >
          <Image alt="check" src={Tick} />
          Your Best Employee
        </Typography>
        <Typography
          display="flex"
          alignItems="center"
          columnGap="10px"
          color="rgba(22, 22, 22, 0.90)"
          fontSize="10px"
          marginTop="5px"
        >
          <Image alt="check" src={Tick} />
          The Best Project You've Worked On
        </Typography>
      </CardContent>
    </Card>
  );
}
