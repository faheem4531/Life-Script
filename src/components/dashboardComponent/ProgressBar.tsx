import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  '20%',
  '40%',
  '60%',
  '80%',
  '100%'
];

export default function ProgressBar() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1}   alternativeLabel sx={{ width:'100%',
        "& .MuiStepConnector-line": {
            border: 'none',
            width: '100%',
            height: '10px',
            background: '#EDEDED',
            
        }
      }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}