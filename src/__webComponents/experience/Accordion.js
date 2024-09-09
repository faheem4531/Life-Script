"use client";

import { Box } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Bandage from "@/__webAssets/pngs/bandage.png";
import styles from "../ComponentsStyles.module.css";

export default function CustomizedAccordions({ panelsData }) {
  const { t } = useTranslation();
  const [currentPanel, setCurrentPanel] = useState(0);
  const [expanded, setExpanded] = useState("panel1");
  const [panelActive, setPanelActive] = useState({
    panel1: true,
    panel2: false,
    panel3: false,
    panel4: false,
    panel5: false,
    panel6: false,
  });

  const handleChange = (panel) => {
    setExpanded(expanded === panel ? false : panel);
    setPanelActive((prevState) => ({
      ...Object.fromEntries(Object.keys(prevState).map((key) => [key, false])),
      [panel]: true,
    }));
  };

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme, open }) => ({
    borderLeft: open ? "3px solid #E1683B" : "2px solid #3E4F3C",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&::before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary {...props} />
  ))(({ theme, open }) => ({
    color: open ? "#3E4F3C" : "rgba(0, 0, 0, .2)",
    backgroundColor: "#F3ECDA",
    fontWeight: 500,
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(0),
    backgroundColor: "#F3ECDA",
    color: "#3E4F3C",
  }));

  useEffect(() => {
    const currentPanelIndex = currentPanel % panelsData.length;
    const timeoutId = setTimeout(() => {
      const nextPanelIndex = (currentPanel + 1) % panelsData.length;
      handleChange(panelsData[nextPanelIndex].panel);
      setCurrentPanel(nextPanelIndex);
    }, panelsData[currentPanelIndex].timer);

    return () => clearTimeout(timeoutId);
  }, [currentPanel]);

  return (
    <>
      <Box sx={{ maxHeight: "460px" }}>
        {panelsData.map((panel, index) => (
          <Accordion
            key={panel.panel}
            expanded={expanded === panel.panel}
            onChange={() => {
              handleChange(panel.panel);
              setCurrentPanel(index);
            }}
            open={expanded === panel.panel}
          >
            <AccordionSummary
              aria-controls={`${panel.panel}-content`}
              id={`${panel.panel}-header`}
            >
              <Typography
                component="div"
                sx={{ fontSize: { lg: "32px", md: "26px" }, fontWeight: 500 }}
                color={panelActive[panel.panel] ? "#3E4F3C" : ""}
              >
                <h3 className={styles.pureHeadings}>{t(panel.heading)}</h3>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                component="div"
                sx={{
                  fontSize: "16px",
                  padding: "5px 0 20px 35px",
                  maxWidth: "370px",
                  fontFamily: "Avenir",
                }}
              >
                <h4 className={styles.pureHeadings}>{t(panel.description)}</h4>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Box
        sx={{
          position: "relative",
          bgcolor: "",
          minHeight: { sm: "380px", md: "", xs: "310px" },
          minWidth: { sm: "390px", md: "", xs: "310px" },
        }}
      >
        {panelsData.map(
          (panel) =>
            panelActive[panel.panel] && (
              <Image
                key={panel.panel}
                src={panel.imageSrc}
                alt={panel.alt}
                title={panel.imgTitle}
                className={styles.gif}
                width={613}
                height={300}
                priority
              />
            )
        )}
        <Image
          src={Bandage}
          loading="lazy"
          alt="image"
          className={styles.bandage}
        />
      </Box>
    </>
  );
}
