import GlobelBtn from "@/components/button/Button";
import SelectBookCoverCard from "@/components/dashboardComponent/SelectBookCoverCard";
import { Box } from "@mui/material";
import backArrow from "../../../_assets/svg/left.svg";
import NextArrow from "../../../_assets/svg/rightArrow.svg";

const BookCoverTab = ({ setSelectedTab }) => {
  const handleClick = (event: any) => {
    event.stopPropagation();
  };
  return (
    <Box bgcolor={"#FFF9F0"}>
      <Box
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <SelectBookCoverCard />
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: 2,
            pr: "50px",
            py: "15px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              pb: "20px",
            }}
          >
            <Box>
              <GlobelBtn
                btnText="Back"
                onClick={() => {
                  setSelectedTab(0);
                }}
                image={backArrow}
              />
            </Box>
            <Box>
              <GlobelBtn
                bgColor="#186F65"
                color="white"
                btnText="Next"
                image2={NextArrow}
                border="0px"
                onClick={() => {
                  setSelectedTab(2);
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BookCoverTab;
