import Layout from "@/components/Layout/Layout";
import GlobelBtn from "@/components/button/Button";
import SubscriptionHeader from "@/components/dashboardComponent/subscriptionHeader";
import { Box, TextField, Typography } from "@mui/material";

const SupportScreen = () => {
  return (
    <Box>
      <Layout>
        <SubscriptionHeader title="Support" description="" />
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            borderRadius: "14.994px",
            bgcolor: "#FFF",
            border: " 1.669px solid #E2E7F0",
            p: "26px 30px",
            mt: "26px",
            flexWrap: "wrap",
          }}
        >
          <Box
            flex={0.7}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              minWidth: "280px",
              mt: { xs: "20px", sm: "0px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                mt: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                  color: "#474E60",
                  ml: "5px",
                }}
              >
                Add Description
              </Typography>
              <TextField
                multiline
                rows={8}
                maxRows={8}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20.202px",
                    backgroundColor: "#F6F9FB",
                    border: "0px",
                    pl: "15px",
                  },
                  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                    border: "0px",
                  },
                  width: "100%",
                  "&:hover": {
                    border: "none",
                    outline: "none",
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                mt: "20px",
              }}
            >
              <GlobelBtn btnText="Support" width="200px" />
            </Box>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default SupportScreen;
