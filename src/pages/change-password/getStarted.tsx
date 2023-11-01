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
        <Box sx={{ mt: 20, ml: 10 }}>
          <Typography
            sx={{ color: "white", fontSize: "40px", fontWeight: "400px" }}
          >
            Hi Naseer 👋
          </Typography>
        </Box>
        <Box></Box>
      </Box>
    </div>
  );
};

export default LetsStarted;
