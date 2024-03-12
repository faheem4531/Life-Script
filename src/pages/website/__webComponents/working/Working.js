import { Box, Typography } from "@mui/material";
import PrimaryHeading from "../headings/PrimaryHeading";
import styles from "../ComponentsStyles.module.css"
import Points from "./Points";

const Working = ({ data, heading, subHeading = false }) => {

  return (
    <Box sx={{ padding: { lg: '200px 25px 220px', md: "150px 20px 200px", sm: "150px 30px 200px", xs: "170px 16px" }, height: "" }}
      className={styles.workingBox}
    >
      <PrimaryHeading showStyle={true} removeStyleMbl={true} heading={heading} color="#F3ECDA" />
      {subHeading && <Typography sx={{ fontSize: "32px", display: { md: "block", sm: "none", xs: "none" }, fontWeight: 500, margin: "64px 0 -80px", textAlign: "center", color: "#F3ECDA" }}>{subHeading}</Typography>}

      <Box sx={{
        marginTop: { lg: "150px", md: "120px", sm: "90px", xs: "60px" },
        display: "flex",
        flexDirection: { md: "row", sm: "column", xs: "column" },
        columnGap: { lg: "17px", md: "10px" },
        justifyContent: "center",
        alignItems: "center",
        rowGap: "20px"
      }}>

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