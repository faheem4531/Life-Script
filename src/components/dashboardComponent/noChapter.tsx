import { Box, Typography } from "@mui/material";
import Image from "next/image";
import noData from "../../../public/noData.svg";
import { useTranslation } from "react-i18next";

export default function NoChapters() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: { sm: "24px", xs: "5px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: { xs: "calc(100vh - 290px)" },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "#B2B2B2",
            fontSize: { sm: "32px", xs: "22px" },
          }}
        >
         {t("noChapters.startNewChapter")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={noData} alt="No Data" height={120} />
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            color: "#B2B2B2",
            fontSize: { sm: "26px", xs: "18px" },
          }}
        >
          {" "}
          {t("noChapters.noDataFound")}
        </Typography>
      </Box>
    </Box>
  );
}
