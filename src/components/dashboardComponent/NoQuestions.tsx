import { Box, Typography } from "@mui/material";
import Image from "next/image";
import NoData from "@/_assets/svg/no-data-icon.svg"
import { useTranslation } from "react-i18next";

export default function NoQuestions() {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={NoData}
          alt="No Data"
          height={150}
        />
      </Box>
      <Typography
        sx={{ textAlign: "center", color: "#B2B2B2", fontSize: { sm: "26px", xs: "19px" } }}
      >
        {" "}
        {t("noChapters.noDataFound")}
      </Typography>
    </Box>
  );
}
