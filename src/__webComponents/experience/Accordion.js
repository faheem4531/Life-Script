'use client'

import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Image from 'next/image';
import styles from "../ComponentsStyles.module.css"

import Bandage from "@/__webAssets/pngs/bandage.png"
import AssistedEditing from "@/__webAssets/gif/assisted-editing.gif"
import AutoPhoto from "@/__webAssets/gif/auto-photo.gif"
import FamilyTree from "@/__webAssets/gif/family-tree.gif"
import FormattingFeatures from "@/__webAssets/gif/formatting-features.gif"
import Narrative from "@/__webAssets/gif/narrative.gif"
import VoiceToText from "@/__webAssets/gif/voice-to-text.gif"

const panels = [
  {
    panel: 'panel1',
    timer: 11000
  },
  {
    panel: 'panel2',
    timer: 6000
  },
  {
    panel: 'panel3',
    timer: 10700
  },
  {
    panel: 'panel4',
    timer: 10700
  },
  {
    panel: 'panel5',
    timer: 5000
  },
  {
    panel: 'panel6',
    timer: 7600
  },
];

export default function CustomizedAccordions() {

  const [currentPanel, setCurrentPanel] = useState(0);
  const [expanded, setExpanded] = useState('panel1');
  const [panelActive, setPanelActive] = useState({
    panel1: true,
    panel2: false,
    panel3: false,
    panel4: false,
    panel5: false,
    panel6: false,
  })

  const handleChange = (panel) => {
    setExpanded(expanded === panel ? false : panel);
    setPanelActive((prevState) => ({
      ...Object.fromEntries(Object.keys(prevState).map(key => [key, false])),
      [panel]: true,
    }));
  };

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme, open }) => ({
    borderLeft: open ? '3px solid #E1683B' : '2px solid #3E4F3C',

    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&::before': {
      display: 'none',
    },
  }));

  const AccordionSummary = styled((props, open) => (
    < MuiAccordionSummary
      {...props}
    />

  ))(({ theme, open }) => ({
    color: open ? '#3E4F3C' : 'rgba(0, 0, 0, .2)',

    backgroundColor: '#F3ECDA',
    fontWeight: 500,
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(0),
    backgroundColor: '#F3ECDA'
  }));


  useEffect(() => {
    const currentPanelIndex = currentPanel % panels.length;


    console.log(currentPanelIndex, "currentPanelIndex");
    console.log(currentPanel, "currentPanel");
    const timeoutId = setTimeout(() => {
      // Calculate the index of the next panel
      const nextPanelIndex = (currentPanel + 1) % panels.length;
      handleChange(panels[nextPanelIndex].panel);
      setCurrentPanel(nextPanelIndex);
    }, panels[currentPanelIndex].timer);

    // Cleanup function to clear the timeout when component unmounts or when the dependency array changes
    return () => clearTimeout(timeoutId);
  }, [currentPanel]);

  return (
    <>
      <Box sx={{ maxHeight: "460px" }}>
        <Accordion expanded={expanded === 'panel1'} onChange={() => { handleChange('panel1'); setCurrentPanel(0) }} open={expanded === 'panel1'}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography sx={{ fontSize: { lg: "32px", md: "26px" }, fontWeight: 500 }} color={panelActive.panel1 ? "#3E4F3C" : ""}>
              <h3>1. Narrative Fusion </h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{
              color: "#494949",
              fontSize: "16px",
              padding: "5px 0 20px 45px",
              maxWidth: "370px",
              fontFamily: "Avenir"
            }}>
              <h4>Turns your answers into beautifully written chapters with a single click. No writing experience needed.</h4>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={() => { handleChange('panel2'); setCurrentPanel(1) }} open={expanded === 'panel2'}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography sx={{ fontSize: { lg: "32px", md: "26px" }, fontWeight: 500 }} color={panelActive.panel2 ? "#3E4F3C" : ""}>
              <h3>2. Assisted Editing </h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{
              color: "#494949",
              fontSize: "16px",
              padding: "5px 0 20px 35px",
              maxWidth: "370px",
              fontFamily: "Avenir"
            }}>
              <h4>Automatically edits and proofreads your text with real-time suggestions. No typos anymore.</h4>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={() => { handleChange('panel3'); setCurrentPanel(2) }} open={expanded === 'panel3'}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography sx={{ fontSize: { lg: "32px", md: "26px" }, fontWeight: 500 }} color={panelActive.panel3 ? "#3E4F3C" : ""}>
              <h3>3. Voice-to-Text</h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{
              color: "#494949",
              fontSize: "16px",
              padding: "5px 0 20px 35px",
              maxWidth: "370px",
              fontFamily: "Avenir"
            }}>
              <h4>Captures your spoken words, transforming them into written text if you don’t feel like typing.</h4>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={() => { handleChange('panel4'); setCurrentPanel(3) }} open={expanded === 'panel4'}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography sx={{ fontSize: { lg: "32px", md: "26px" }, fontWeight: 500 }} color={panelActive.panel4 ? "#3E4F3C" : ""}>
              <h3>4. Family Tree </h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{
              color: "#494949",
              fontSize: "16px",
              padding: "5px 0 20px 35px",
              maxWidth: "370px",
              fontFamily: "Avenir"
            }}>
              <h4>Visually represents your ancestry from parents to distant ancestors at the end of your book.</h4>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={() => { handleChange('panel5'); setCurrentPanel(4) }} open={expanded === 'panel5'}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography sx={{ fontSize: { lg: "32px", md: "26px" }, fontWeight: 500 }} color={panelActive.panel5 ? "#3E4F3C" : ""}>
              <h3>5. Formatting Features</h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{
              color: "#494949",
              fontSize: "16px",
              padding: "5px 0 20px 35px",
              maxWidth: "370px",
              fontFamily: "Avenir"
            }}>
              <h4> Allows you to customize your text and its font, style, size, color, layout and more.</h4>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel6'} onChange={() => { handleChange('panel6'); setCurrentPanel(5) }} open={expanded === 'panel6'}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography sx={{ fontSize: { lg: "32px", md: "26px" }, fontWeight: 500 }} color={panelActive.panel6 ? "#3E4F3C" : ""}>
              <h3>6. Auto Photo Improvement</h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{
              color: "#494949",
              fontSize: "16px",
              padding: "5px 0 20px 35px",
              maxWidth: "370px",
              fontFamily: "Avenir"
            }}>
              <h4>Automatically adjusts your photos for high-quality printing by managing size, resolution, and more.</h4>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box sx={{ position: "relative" }}>
        {panelActive.panel1 && <Image src={Narrative} alt="gif" className={styles.gif} />}
        {panelActive.panel2 && <Image src={AssistedEditing} alt="gif" className={styles.gif} />}
        {panelActive.panel3 && <Image src={VoiceToText} alt="gif" className={styles.gif} />}
        {panelActive.panel4 && <Image src={FamilyTree} alt="gif" className={styles.gif} />}
        {panelActive.panel5 && <Image src={FormattingFeatures} alt="gif" className={styles.gif} />}
        {panelActive.panel6 && <Image src={AutoPhoto} alt="gif" className={styles.gif} />}

        <Image src={Bandage} alt="image" className={styles.bandage} />
      </Box>

    </>

  );
}