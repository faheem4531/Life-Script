import Tick from "@/_assets/svg/checked.svg";
import { Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "./HomeSteps.module.css";

export default function TemplateCard() {
  const { t } = useTranslation();
  return (
    <Card sx={{ borderRadius: "6.5px" }}>
      <CardContent sx={{ padding: { xs: "5px 8px 35px" } }}>
        <Typography
          variant="body2"
          color="text "
          fontWeight="600"
          textAlign="center"
          sx={{
            fontSize: "9.383px",
            marginTop: "15px",
          }}
        >
          {t("StartNewTem.chTitle")}
        </Typography>
        <Divider
          sx={{
            width: { xs: "116.243px" },
            backgroundColor: "#000",
            height: "2px",
            margin: "9px auto 0",
            marginBottom: { xs: "12px" },
          }}
        />
        <Typography
          display="flex"
          columnGap="10px"
          color="rgba(22, 22, 22, 0.90)"
          marginTop="5px"
          sx={{ columnGap: { sm: "10px", xs: "3px" }, fontSize: "6.239px" }}
        >
          <Image alt="check" src={Tick} className={styles.tick} />
          {t("StartNewTem.chQues1")}
        </Typography>
        <Typography
          display="flex"
          columnGap="10px"
          color="rgba(22, 22, 22, 0.90)"
          marginTop="5px"
          sx={{ columnGap: { sm: "10px", xs: "3px" }, fontSize: "6.239px" }}
        >
          <Image alt="check" src={Tick} className={styles.tick} />
          {t("StartNewTem.chQues2")}
        </Typography>
        <Typography
          display="flex"
          columnGap="10px"
          color="rgba(22, 22, 22, 0.90)"
          marginTop="5px"
          sx={{ columnGap: { sm: "10px", xs: "3px" }, fontSize: "6.239px" }}
        >
          <Image alt="check" src={Tick} className={styles.tick} />
          {t("StartNewTem.chQues3")}
        </Typography>
      </CardContent>
    </Card>
  );
}
