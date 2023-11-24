import { Box, Typography } from "@mui/material";
import styles from "./Custom.module.css";

const TimeTracker = () => {
  return (
    <Box sx={{
      color: "#197065;",
      marginTop: "15px",
      borderRadius: "14px",
      border: "1px solid #197065",
      background: "#FFF",
      height: "240px",
      position: "relative",
    }}
      className={styles.trackerbg}
    >

      <Box sx={{
        border: "3px solid #197065",
        borderRadius: "50%",
        width: "145px",
        height: "145px",
        padding: "4px",
        position: "absolute",
        left: "50px",
        bottom: "30px",
        bgcolor: "#fff"
      }}>
        <Box sx={{
          border: "3px dashed #197065",
          borderRadius: "50%",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}>
          <Typography sx={{ fontSize: "36px", fontWeight: 500, fontFamily: "Rubik", marginBottom: "-7px" }}>
            300
          </Typography>
          <Typography sx={{ fontSize: "11px", fontWeight: 300, fontFamily: "Rubik", color: "#000" }}>
            Words
          </Typography>
        </Box>
      </Box>

      <Box sx={{
        border: "2.5px solid #197065",
        borderRadius: "50%",
        width: "109px",
        height: "109px",
        padding: "3px",
        position: "absolute",
        left: "205px",
        top: "28px"
      }}>
        <Box sx={{
          border: "2.5px dashed #197065",
          borderRadius: "50%",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}>
          <Typography sx={{ fontSize: "26px", fontWeight: 500, fontFamily: "Rubik", marginBottom: "-7px" }}>
            60
          </Typography>
          <Typography sx={{ fontSize: "11px", fontWeight: 300, fontFamily: "Rubik", color: "#000" }}>
            Questions
          </Typography>
        </Box>
      </Box>

      <Box sx={{
        border: "2.1px solid #197065",
        borderRadius: "50%",
        width: "100px",
        height: "100px",
        padding: "3px",
        position: "absolute",
        left: "300px",
        bottom: "20px"
      }}>
        <Box sx={{
          border: "2.1px dashed #197065",
          borderRadius: "50%",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}>
          <Typography sx={{ fontSize: "24px", fontWeight: 500, fontFamily: "Rubik", marginBottom: "-7px" }}>
            20
          </Typography>
          <Typography sx={{ fontSize: "11px", fontWeight: 300, fontFamily: "Rubik", color: "#000" }}>
            Chapters
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TimeTracker;
