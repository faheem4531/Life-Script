import NextIcon from "@/_assets/svg/next-icon.svg";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import GlobelBtn from "../button/Button";
import styles from "./Custom.module.css";

export const ViewBook = () => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <>
      <Box
        onClick={() => router.push("/dashboard/BookView")}
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
          cursor: "pointer",
        }}
        className={styles.viewBook}
      >
        <Typography
          sx={{
            fontSize: { xl: "21px", sm: "18px", xs: "12px" },
            fontWeight: 500,
          }}
        >
          {t("overView.ViewBtn")}
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
    </>
  );
};

export const ViewTree = () => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <Box
    onClick={() => router.push("/familyTree")}
      sx={{
        bgcolor: "#197065",
        cursor: "pointer",
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
        {t("overView.famliyTreeBtn")}
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
  const { t } = useTranslation();
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
          {t("overView.EverySpecial")}
        </Typography>
        <Typography
          sx={{ fontSize: { xl: "14px", sm: "12px" }, marginTop: "15px" }}
        >
          Lorem ipsum dolor sit amet consectetur. Morbi eleifend sapien
          vestibulum ante facilisis. Ultrices tincidunt elit
        </Typography>
      </Box>
      <Box>
        <GlobelBtn
          bgColor="#186F65"
          color="white"
          btnText={`${t("overView.continue")}`}
          // onClick={}
          width={{ xl: "250px", sm: "180px" }}
        />
      </Box>
    </Box>
  );
};
