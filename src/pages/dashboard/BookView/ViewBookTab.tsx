import GlobelBtn from "@/components/button/Button";
import { Box, Typography } from "@mui/material";
import backArrow from "../../../_assets/svg/left.svg";
import NextArrow from "../../../_assets/svg/rightArrow.svg";
import QaTabBars from "../Questionnaire/qaTabBars";

const ViewBookTab = ({ setSelectedTab }) => {
  const handleClick = (event: any) => {
    event.stopPropagation();
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          flexWrap: "wrap",
          gap: 2,
          pr: "20px",
        }}
      >
        <Box flex={1}>
          <Box
            sx={{
              color: "black",
              gap: "8px",
              mt: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: { md: "40px", sm: "36px", xs: "26px" },
                fontWeight: 700,
              }}
            >
              View PDF
            </Typography>
          </Box>
          <Box
            sx={{
              mb: {
                md: "20px",
                sm: "15px",
                xs: "10px",
              },
            }}
          >
            <QaTabBars tabProp={3} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            pb: "20px",
          }}
        >
          <Box>
            <GlobelBtn
              btnText="Back"
              onClick={() => {
                setSelectedTab(1);
              }}
              image={backArrow}
            />
          </Box>
          <Box>
            <GlobelBtn
              bgColor="#186F65"
              color="white"
              btnText="Finish"
              image2={NextArrow}
              onClick={() => {
                setSelectedTab(2);
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        onClick={(e) => {
          handleClick(e);
        }}
      >
        ViewBookTab
      </Box>
    </Box>
  );
};

export default ViewBookTab;
