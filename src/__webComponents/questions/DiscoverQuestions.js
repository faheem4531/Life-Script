"use client";

import { Box } from "@mui/material";

import { useTranslation } from "react-i18next";
import styles from "../ComponentsStyles.module.css";

const DiscoverQuestions = ({ questions }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        padding: {
          lg: "150px 160px  120px 110px",
          md: "150px 50px 150px",
          sm: "150px 100px 150px",
          xs: "120px 20px 80px",
        },
      }}
      className={styles.gotQsBg}
    >hell</Box>
  );
};
export default DiscoverQuestions;
