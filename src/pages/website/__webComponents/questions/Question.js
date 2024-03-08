'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Icon from "@/__webAssets/svgs/qs-list.svg"
import Image from 'next/image';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: "1px solid #7F886B",
  '&:not(:last-child)': {
    borderBottom: 'none',
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <Image src={Icon} alt='icon' />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#F3ECDA',
  padding: "10px 0",
  flexDirection: 'row-reverse',
  color: "#3E4F3C",
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  backgroundColor: '#F3ECDA',
}));

export default function Question({ qs, ans, panelNo, expanded, handleExpands }) {

  return (
    <div>
      <Accordion expanded={expanded} onChange={() => handleExpands(panelNo)}>
        <AccordionSummary
        >
          <Typography sx={{ fontFamily: "myfamily" }}>{qs}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ padding: "0px 0 10px 60px", fontSize: "14px" }}>{ans}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}