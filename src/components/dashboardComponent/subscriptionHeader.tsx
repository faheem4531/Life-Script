import { Box, Typography } from "@mui/material";
import GlobelBtn from "../button/Button";
import styles from "./Custom.module.css";

interface Props {
  title?: string;
  description?: string;
  btnCheck?: boolean;
  onClick?: any;
}

const SubscriptionHeader = ({
  title,
  description,
  btnCheck,
  onClick,
}: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#30422E",
        color: "#fff",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: { xs: "auto", sm: "150px", md: "140px" },
        gap: "30px",
        overflow: "hidden",
      }}
      className={styles.SelBookCoverHeaderMain}
    >
      <Box
        sx={{
          width: "90%",
          gap: "20px",
          padding: { md: "0px 40px", sm: "15px 35px", xs: "15px 30px" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "28px", md: "32px", lg: "39.75px" },
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "10px", sm: "12px", md: "14px", lg: "16.498px" },
            fontWeight: 600,
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          mr: { md: "40px", sm: "20px", xs: "15px" },
          display: btnCheck ? "block" : "none",
        }}
      >
        <GlobelBtn
          btnText="Edit"
          border="1px solid white"
          color="white"
          onClick={onClick}
        />
      </Box>
    </Box>
  );
};

export default SubscriptionHeader;
