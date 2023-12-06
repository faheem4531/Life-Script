import Layout from "@/components/Layout/Layout";
import ColorPickerComponent from "@/components/dashboardComponent/ColorPicker";
import SelectBookCoverCard from "@/components/dashboardComponent/SelectBookCoverCard";
import SelectBookCoverHeader from "@/components/dashboardComponent/SelectBookCoverHeader";
import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const EditBookCover = () => {
  return (
    <div>
      <Layout>
        <SelectBookCoverHeader />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { sm: "40px", md: "50px", lg:"70px"},
            mt: "20px",
          }}
        >
          <Box flex={"1"} display="flex" flexDirection="column" gap="24px">
            <Box>
              <Typography
                sx={{
                  // marginRight: "300px",
                  fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                }}
              >
                Title*
              </Typography>
              <TextField
                variant="outlined"
                placeholder={"Title*"}
                name="email"
                // onBlur={formik.handleBlur}
                // onChange={formik.handleChange}
                sx={{
                  marginTop: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px",
                    backgroundColor: "white",
                  },
                  width: "100%",
                  // width: "460px",
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  // marginRight: "300px",
                  fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                }}
              >
                Subtitle*
              </Typography>
              <TextField
                variant="outlined"
                placeholder={"Subtitle*"}
                name="email"
                // onBlur={formik.handleBlur}
                // onChange={formik.handleChange}
                sx={{
                  marginTop: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px",
                    backgroundColor: "white",
                  },
                  width: "100%",
                  // width: "460px",
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  // marginRight: "300px",
                  fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                }}
              >
                Byline
              </Typography>
              <TextField
                variant="outlined"
                placeholder={"Byline"}
                name="email"
                // onBlur={formik.handleBlur}
                // onChange={formik.handleChange}
                sx={{
                  marginTop: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px",
                    backgroundColor: "white",
                  },
                  width: "100%",
                  // width: "460px",
                }}
              />
            </Box>
            {/* <Box>
              <Typography
                sx={{
                  // marginRight: "300px",
                  fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                }}
              >
                Colour Palette*
              </Typography>
              <TextField
                variant="outlined"
                placeholder={"Colour Palette*"}
                name="email"
                // onBlur={formik.handleBlur}
                // onChange={formik.handleChange}
                sx={{
                  marginTop: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px",
                    backgroundColor: "white",
                  },
                  width: "100%",
                  // width: "460px",
                }}
              />
            </Box> */}
            <ColorPickerComponent/>
          </Box>
          <Box flex={"1"}>
            <SelectBookCoverCard landScape={false} />
          </Box>
        </Box>
      </Layout>
    </div>
  );
};

export default EditBookCover;
