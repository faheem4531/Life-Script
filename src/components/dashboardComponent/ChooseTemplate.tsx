import { Box, Typography } from "@mui/material";

import TemplateCard from "./templateCard";

const ChooseTemplate = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#197065",
        color: "#fff",
        borderRadius: "24px",
        padding: "25px 70px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ position: "relative" }}>
          <Box
            style={{
              display: "grid",
              height: "auto",
              marginTop: "4rem",
            }}
          >
            <Typography sx={{ fontSize: "24px" }}>Choose a</Typography>
            <Typography sx={{ fontSize: "44px" }}>Template</Typography>
            <Typography sx={{ fontSize: "13px" }}>
              Lorem ipsum doler Lorem ipsum doler Lorem ipsum doler Lorem ipsum
              doler
            </Typography>
          </Box>
        </Box>
        <Box>
          <TemplateCard />
        </Box>
      </Box>
    </Box>
  );
};

export default ChooseTemplate;
