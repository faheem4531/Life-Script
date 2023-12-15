import { Box, Typography } from "@mui/material";

import TemplateCard from "./templateCard";
import styles from "./HomeSteps.module.css"


const ChooseTemplate = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#197065",
        color: "#fff",
        borderRadius: { sm: "24px", xs: "5px" },
        height: { xs: "162px" },
        padding: { lg: "25px 70px", sm: "15px 30px", xs: "10px 15px" },
      }}
      className={styles.bgTree}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: { xs: "100%" } }}>
        <Box>
          <Typography sx={{ fontSize: { sm: "20px", xs: "18px" } }}>Choose a</Typography>
          <Typography sx={{ fontSize: { sm: "40px", xs: "34px" } }}>Template</Typography>
          <Typography sx={{ fontSize: { sm: "13px", xs: "10px" } }}>
            Lorem ipsum doler Lorem ipsum doler Lorem ipsum doler Lorem ipsum
            doler
          </Typography>
        </Box>
        <Box sx={{
          // width: { lg: "350px", sm: "250px", xs: "170" },
          marginLeft: { xs: "15px" },
        }}>
          <TemplateCard />
        </Box>
      </Box>
    </Box >
  );
};

export default ChooseTemplate;
