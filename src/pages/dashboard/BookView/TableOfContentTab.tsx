import GlobelBtn from "@/components/button/Button";
import { Box } from "@mui/material";
import NextArrow from "../../../_assets/svg/rightArrow.svg";
import TOCMain from "../TableOfContent/components/TOCMain";

const TableOfContentTab = ({ setSelectedTab }) => {
  const handleClick = (event: any) => {
    event.stopPropagation();
  };
  return (
    
    <Box>
      <Box
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <TOCMain />
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            py: "15px",
            mr: "50px",
          }}
        >
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
    </Box>
  );
};

export default TableOfContentTab;
