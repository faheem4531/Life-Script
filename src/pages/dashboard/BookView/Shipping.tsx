import GlobelBtn from "@/components/button/Button";
import { Box } from "@mui/material";
import backArrow from "../../../_assets/svg/left.svg";
import NextArrow from "../../../_assets/svg/rightArrow.svg";
import ShippingCard from "./components/ShippingCard";
import ShippingForm from "./components/ShippingForm";

const Shipping = ({ setSelectedTab, setCount, count }) => {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "white",
        borderRadius: "4.164px",
        p: "20px 24px",
        gap: "20px",
        flexDirection: { md: "row", xs: " column" },
      }}
    >
      <Box
        sx={{
          flex: 1,
          minWidth: "300px",
        }}
      >
        <ShippingForm />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: { md: "end", xs: "center" },
        }}
      >
        <Box
          sx={{
            width: { md: "auto", xs: "100%" },
            p: {
              sm: "0px",
              xs: "10px",
            },
          }}
        >
          <ShippingCard
            setCount={setCount}
            count={count}
            QuantityCheck={true}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: 2,
              my: "20px",
            }}
          >
            <Box>
              <GlobelBtn
                btnText="Back"
                onClick={() => {
                  setSelectedTab(2);
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
                  setSelectedTab(4);
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Shipping;
