
import * as React from 'react';
import { Box, Stack, Typography } from "@mui/material";
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';



function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', padding: "6px 5px", alignItems: 'center', position: "relative", border: "2px solid #187167", height: "35px", bgcolor: "#F9F9F9", borderRadius: "30px" }}>
      <Stack sx={{ width: '100%', color: '#197065' }} spacing={2}>
        <LinearProgress sx={{ height: "27px", bgcolor: "#F9F9F9", borderRadius: "30px" }}
          variant="determinate" color="inherit"  {...props} />
      </Stack>
      <Box sx={{ minWidth: 35, position: "absolute", right: "20px" }}>
        <Typography variant="body2" color="#197065" fontWeight="500">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function LinearProgressBar() {
  // const [progress, setProgress] = React.useState(10);

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
  //   }, 800);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <Box sx={{ width: '100%', marginTop: "26px" }}>
      <LinearProgressWithLabel value={75} />
    </Box>
  );
}