import InputWithLabel from "@/components/Input";
import { getLuluBalance } from "@/store/slices/authSlice";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import CountrySelect from "@/components/dashboardComponent/AutoComplete";

import { useDispatch, useSelector } from "react-redux";

const ShippingForm = () => {
  const dispatch:any = useDispatch();

  useEffect(() =>{
    dispatch(getLuluBalance()).unwrap().then((res) => console.log("response2", res))
  },[])

  return (
    <Box
      sx={{
        flex: 1,
        p: { md: "30px 24px", sm: "25px 18px", xs: "20px 10px" },
        bgcolor: "#F8F6F9",
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <InputWithLabel
        color="#474E60"
        label="Name"
        value={null}
        placeholder="Name"
        borderRadius="47.202px"
        bgColor="white"
        border="1px solid #186F65"
      />
      <InputWithLabel
        color="#474E60"
        label="Email"
        value={null}
        placeholder="Email"
        borderRadius="47.202px"
        bgColor="white"
        border="1px solid #186F65"
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          flexDirection: { sm: "row", xs: "column" },
        }}
      >
        <Box flex={1} width={"100%"}>
          <InputWithLabel
            color="#474E60"
            label="City"
            value={null}
            placeholder="City"
            borderRadius="47.202px"
            bgColor="white"
            border="1px solid #186F65"
          />
        </Box>

        <Box flex={1} width={"100%"}>
        <Typography
        sx={{
          fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
          color: "black",
          ml: "5px",
        }}
      >
        Country Code
      </Typography>
        <Box  sx={{
          height: "56px",
          border: "1px solid #186F65",
          bgcolor: "white",
          borderRadius: "47.202px"
        }}>
          <CountrySelect onSelect={undefined} stripe={true} backgroundColor="transparent" />
        </Box>
        </Box>
      </Box>
      <InputWithLabel
        color="#474E60"
        label="Phone Number"
        placeholder="Phone Number"
        value={null}
        borderRadius="47.202px"
        bgColor="white"
        border="1px solid #186F65"
        type="number"
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
          flexDirection: { sm: "row", xs: "column" },
        }}
      >
        <Box flex={1} width={"100%"}>
          <InputWithLabel
            color="#474E60"
            label="State Code"
            value={null}
            placeholder="State Code"
            borderRadius="47.202px"
            bgColor="white"
            border="1px solid #186F65"
          />
        </Box>
        <Box flex={1} width={"100%"}>
          <InputWithLabel
            color="#474E60"
            label="Post Code"
            value={null}
            placeholder="Post Code"
            borderRadius="47.202px"
            bgColor="white"
            border="1px solid #186F65"
            type="number"
          />
        </Box>
      </Box>
      <InputWithLabel
        color="#474E60"
        label="Street"
        value={null}
        placeholder="Street"
        borderRadius="47.202px"
        bgColor="white"
        border="1px solid #186F65"
      />
    </Box>
  );
};

export default ShippingForm;
