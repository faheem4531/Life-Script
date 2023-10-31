import { Box, Typography } from "@mui/material";

const LetsStarted = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: 'url("/letsStarted.svg")',
          backgroundSize: "cover", // Adjust as needed
          // backgroundPosition: 'center center', // Adjust as needed
          // backgroundRepeat: 'no-repeat', // Adjust as needed
          width: "100%",
          height: "100vh", // Adjust the height as needed
          overflow: "hidden",
          margin: 0,
          padding: 0,
        }}
      >
        <Typography>Hi Naseer 👋</Typography>
      </Box>
    </div>
  );
};

export default LetsStarted;
