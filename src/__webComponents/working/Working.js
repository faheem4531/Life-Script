import { Box, Typography } from "@mui/material";
import PrimaryHeading from "../headings/PrimaryHeading";
import styles from "./Working.module.css"
import Points from "./Points";

const Working = ({ data, heading, subHeading = false }) => {

  return (
    <Box sx={{ padding: '200px 25px 220px' }}
      className={styles.workingBox}
    >
      <PrimaryHeading showStyle={true} heading={heading} color="#F3ECDA" />
      {subHeading && <Typography sx={{ fontSize: "32px", fontWeight: 500, margin: "64px 0 -80px", textAlign: "center", color: "#F3ECDA" }}>{subHeading}</Typography>}

      <Box sx={{ marginTop: "150px", display: "flex", columnGap: "17px", justifyContent: "center" }}>

        {data.map((item, index) => <Points
          key={index}
          no={item.no}
          icon={item.icon}
          title={item.title}
          discription={item.discription}
        />)}
      </Box>
    </Box>
  )
}

export default Working;