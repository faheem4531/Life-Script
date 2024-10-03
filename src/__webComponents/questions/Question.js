"use client";

import Icon from "@/__webAssets/svgs/qs-list.svg";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "../ComponentsStyles.module.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: "1px solid #7F886B",
  "&:not(:last-child)": {
    borderBottom: "none",
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<Image src={Icon} alt="icon" className={styles.questionIcon} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#F3ECDA",
  flexDirection: "row-reverse",
  color: "#3E4F3C",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  backgroundColor: "#F3ECDA",
  color: "#3E4F3C !important",
}));

export default function Question({
  qs,
  ans,
  panelNo,
  expanded,
  handleExpands,
}) {
  return (
    <div>
      <Accordion expanded={expanded} onChange={() => handleExpands(panelNo)}>
        <AccordionSummary
          sx={{ padding: { md: "10px 0 ", sm: "5px 0", xs: "5px 0" } }}
        >
          <Typography
            sx={{ fontFamily: "Avenir8 !important" }}
            variant="h3"
            className={styles.pureHeadings}
          >
            {qs}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              padding: {
                md: "0px 0 20px 60px",
                sm: "0 0 10px 47px",
                xs: "0px 0 10px 47px",
              },
              fontSize: "14px",
              fontFamily: "Avenir !important",
            }}
            variant="h4"
            className={styles.pureHeadings}
          >
            {ans}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
