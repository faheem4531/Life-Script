import GlobelBtn from "@/components/button/Button";
import { Box, Typography } from "@mui/material";
import NextArrow from "../../../_assets/svg/rightArrow.svg";
import QaTabBars from "../Questionnaire/qaTabBars";
import TOCMain from "../TableOfContent/components/TOCMain";

const TableOfContentTab = ({ setSelectedTab }) => {
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
              Table Of Content
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
            <QaTabBars tabProp={1} />
          </Box>
        </Box>
        <Box>
          <GlobelBtn
            bgColor="#186F65"
            color="white"
            btnText="Next"
            image2={NextArrow}
            onClick={() => {
              setSelectedTab(1);
            }}
          />
        </Box>
      </Box>
      <Box
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <TOCMain />
      </Box>
    </Box>
  );
};

export default TableOfContentTab;
