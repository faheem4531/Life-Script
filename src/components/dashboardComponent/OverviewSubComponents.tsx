import NextIcon from "@/_assets/svg/next-icon.svg";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./Custom.module.css";

export const ViewBook = () => {
  return (
    <Box
      sx={{
        bgcolor: "#197065",
        color: "#fff",
        width: "100%",
        padding: "16px 0",
        borderRadius: "14px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
      className={styles.viewBook}
    >
      <Typography
        sx={{
          fontSize: { xl: "21px", sm: "18px", xs: "12px" },
          fontWeight: 500,
        }}
      >
        View Book
      </Typography>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: { xs: "10%" },
          transform: "translateY(-50%)",
          height: "19.603px",
          width: "13px",
        }}
      >
        <Image alt="next" src={NextIcon} className={styles.nextAero} />
      </Box>
    </Box>
  );
};

export const ViewTree = () => {
  return (
    <Box
      sx={{
        bgcolor: "#197065",
        color: "#fff",
        width: "100%",
        padding: "16px 0",
        borderRadius: "14px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={styles.viewTree}
    >
      <Typography
        sx={{
          fontSize: { xl: "21px", sm: "18px", xs: "12px" },
          fontWeight: 500,
        }}
      >
        Family Tree
      </Typography>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: "10%",
          transform: "translateY(-50%)",
          height: "19.603px",
          width: "13px",
        }}
      >
        <Image alt="next" src={NextIcon} className={styles.nextAero} />
      </Box>
    </Box>
  );
};

export const PrintBook = () => {
  return (
    <Box
      sx={{
        color: "#197065",
        bgcolor: "#fff",
        width: "100%",
        padding: { lg: "30px 30px", xs: "25px" },
        borderRadius: "19px",
        display: "flex",
        flexDirection: { sm: "row", xs: "column" },
        justifyContent: "space-between",
        gap: "15px",
        border: "1px solid #197065",
      }}
    >
      <Box sx={{ width: { md: "65%", sm: "85%", xs: "90%" } }}>
        <Typography
          sx={{ fontSize: { xl: "33px", sm: "28px" }, fontWeight: 700 }}
        >
          Every Life is Special
        </Typography>
        <Typography
          sx={{ fontSize: { xl: "14px", sm: "12px" }, marginTop: "15px" }}
        >
          Lorem ipsum dolor sit amet consectetur. Morbi eleifend sapien
          vestibulum ante facilisis. Ultrices tincidunt elit
        </Typography>
      </Box>
      <Button
        sx={{
          color: "#fff",
          bgcolor: "#197065",
          borderRadius: "34px",
          width: { xl: "250px", sm: "180px" },
          fontSize: { xl: "17px", sm: "14px" },
          height: { xl: "70px", sm: "50px" },
          "&:hover": {
            backgroundColor: "#197069",
            color: "#fff",
          },
          textTransform: "capitalize",
        }}
      >
        Print my book
      </Button>
    </Box>
  );
};
