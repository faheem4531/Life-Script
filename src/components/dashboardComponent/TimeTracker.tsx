import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ClockImage from "../../_assets/svg/clockMain.svg";
import styles from "./Custom.module.css";

const TimeTracker = () => {
  return (
    <Box
      sx={{
        color: "#197065;",
        marginTop: "15px",
        borderRadius: "14px",
        border: "1px solid #197065",
        background: "#FFF",
        height: "auto",
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        pr: "30px",
      }}
      className={styles.trackerbg}
    >
      <Box
        sx={{
          position: "relative",
          width: { lg: "284.458px", md: "300px", sm: "320px", xs: "100%" },
          height: { lg: "240px", md: "215px", xs: "190px" },
          display: "flex",
          justifyContent: "space-around",
          p: "15px 0px",
          ml: "30px",
        }}
      >
        <Box
          sx={{
            border: "3px solid #197065",
            borderRadius: "50%",
            width: { lg: "135px", sm: "110px", xs: "100px" },
            height: { lg: "135px", sm: "110px", xs: "100px" },
            padding: "4px",
            bgcolor: "#fff",
            alignSelf: "end",
            mb: "15px",
            mr: { lg: "-10px", xs: "-40px" },
            flexShrink: "0",
          }}
        >
          <Box
            sx={{
              border: "3px dashed #197065",
              borderRadius: "50%",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "36px", md: "28px", sm: "26px", xs: "22px" },
                fontWeight: 500,
                fontFamily: "Rubik",
                marginBottom: "-7px",
              }}
            >
              300
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "11px", md: "10px", sm: "8px", xs: "7px" },
                fontWeight: 300,
                fontFamily: "Rubik",
                color: "#000",
              }}
            >
              Words
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            border: "2.5px solid #197065",
            borderRadius: "50%",
            width: { lg: "99px", sm: "80px", xs: "70px" },
            height: { lg: "99px", sm: "80px", xs: "70px" },
            padding: "3px",
            flexShrink: "0",
          }}
        >
          <Box
            sx={{
              border: "2.5px dashed #197065",
              borderRadius: "50%",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "26px", md: "20px", sm: "18px", xs: "15px" },
                fontWeight: 500,
                fontFamily: "Rubik",
                marginBottom: "-7px",
              }}
            >
              60
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "11px", md: "10px", sm: "8px", xs: "7px" },
                fontWeight: 300,
                fontFamily: "Rubik",
                color: "#000",
              }}
            >
              Questions
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            border: "2.1px solid #197065",
            borderRadius: "50%",
            width: { lg: "99px", sm: "80px", xs: "70px" },
            height: { lg: "99px", sm: "80px", xs: "70px" },
            padding: "3px",
            alignSelf: "end",
            ml: { lg: "-40px", xs: "-70px" },
            flexShrink: "0",
          }}
        >
          <Box
            sx={{
              border: "2.1px dashed #197065",
              borderRadius: "50%",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "24px", md: "20px", sm: "18px", xs: "15px" },
                fontWeight: 500,
                fontFamily: "Rubik",
                marginBottom: "-7px",
              }}
            >
              20
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "11px", md: "10px", sm: "8px", xs: "7px" },
                fontWeight: 300,
                fontFamily: "Rubik",
                color: "#000",
              }}
            >
              Chapters
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          ml: "20px",
          width: "280px",
        }}
      >
        <Image
          src={ClockImage}
          alt="ClockImage"
          style={{
            width: "100%",
          }}
        />
        <Typography
          sx={{
            fontSize: { lg: "30.86px", md: "26px", sm: "22px", xs: "18px" },
            fontWeight: 700,
            position: "absolute",
            right: { lg: "7px", md: "14px", sm: "19px", xs: "24px" },
            bottom: { lg: "35px", md: "45px", xs: "45px" },
            color: "white",
          }}
        >
          12hrs
        </Typography>
      </Box>
    </Box>
  );
};

export default TimeTracker;
