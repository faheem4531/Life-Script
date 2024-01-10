import GlobelBtn from "@/components/button/Button";
import { Box, Checkbox, Typography } from "@mui/material";
import backArrow from "../../../_assets/svg/left.svg";
import NextArrow from "../../../_assets/svg/rightArrow.svg";
import CheckoutForm from "./components/CheckoutForm";
import ShippingCard from "./components/ShippingCard";

const Checkout = ({ setSelectedTab, setCount, count }) => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: "4.164px",
        p: "20px 24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          mb: "40px",
        }}
      >
        <Box mt="-7px">
          {/* <FormControlLabel control={<Checkbox defaultChecked />} label="" /> */}
          <Checkbox
            // uncheckedIcon={<Close />}
            color="success"
          />
        </Box>
        <Typography
          sx={{
            fontSize: { md: "18.752px", sm: "16px", xs: "14px" },
            width: "70%",
          }}
        >
          I acknowledge that I have input all the information on my behalf and
          has reviewed the interior and book cover. I want to print book as it
          is. 
        </Typography>
      </Box>
      <Box display={"flex"}>
        {count !== 1 && (
          <Box
            sx={{
              flex: 1,
            }}
          >
            <CheckoutForm />
          </Box>
        )}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: count !== 1 ? "end" : "center",
          }}
        >
          <Box width={"100%"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: count !== 1 ? "end" : "center",
              }}
            >
              <ShippingCard setCount={setCount} count={count} />
            </Box>
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
                    setSelectedTab(3);
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
    </Box>
  );
};

export default Checkout;
