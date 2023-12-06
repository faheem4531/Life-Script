import { Box } from "@mui/material";
import React from "react";
import CoverImg from "@/_assets/png/selectBookCover.png";
import logo from "@/_assets/svg/SmallLogoWhite.svg"
import Image from "next/image";

const SelectBookCoverCard = ({ landScape }) => {

  return (
    <Box sx={{
      position: "relative",
      "&:hover .hoverBox": {
        display: "flex",
        cursor: "pointer"
      },
    }}>
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "6.077px",
          border: " 0.304px solid #197065",
          width: "100%",
          height: "100%",
          p: "53px 20px",
        }}
      >
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          gap: { xs: "15px", sm: "20px", md: "25px", lg:"30px" , xl:"43px"}
        }}>
          <Box
            sx={{
              bgcolor: "#197065",
              color: "white",
              fontSize: "9.924px",
              fontWeight: '300',
              padding: "5px 8px",
              display:"flex",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              <Box>MY ADVENTUROUS LIFE | John Doe</Box>
              <Box>
                <Image src={logo} alt="" />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: {xs: "80%", sm: "260px", md: "240px", lg:"287.611px"},
              height: "414.319px",
              bgcolor: "#197065",
              color: "white",
              pt: "45px",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                fontSize: { sm: "12px", md: '13px', lg:"15.559px"},
                fontWeight: 300,
                letterSpacing: "2.956px",
                width: landScape ? "35%" : "100%",
                m: "auto",
              }}
            >
              VOLUME 01
            </Box>

            <Box
              mt={landScape && "12px"}
              display="flex"
              flexDirection={landScape ? "column" : "column-reverse"}
            >
              <Box
                sx={{
                  fontSize: {sm: "16px", md: "18px", lg:"22.275px"},
                  fontWeight: 600,
                  width: landScape ? "70%" : "100%",
                  margin: "auto",
                  pb: !landScape && "20px",
                }}
              >
                My Adventurous Life
                <Box
                  sx={{
                    borderBottom: "2.5px solid white",
                    width: landScape ? "82%" : "58%",
                    margin: "auto",
                    pt: !landScape && "20px",
                  }}
                ></Box>
              </Box>

              <Box
                sx={{
                  width: landScape ? {xs: "80%", md: "200px", lg:"212.377px"} : "91.274px",
                  height: landScape ? "104.868px" : "149.534px",
                  margin: landScape ? "45px auto 17px" : "25px auto",
                }}
              >
                <Image
                  src={CoverImg}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                fontSize: "9.336px",
                fontWeight: 400,
                letterSpacing: "0.373px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <span>-</span>
              John Doe
              <span>-</span>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box 
      className= "hoverBox"
      sx={{
        position: "absolute",
        top: "0px",
        left: "0px",
        background: "rgba(0, 0, 0, 0.46)",
        zIndex: "22",
        width: "100%",
        height: "100%",
        borderRadius: "6.077px",
        display: "none",
        justifyContent: "center",
        alignItems: 'center',
      }}>
        <Box sx={{
         color: "white",
         fontSize: "26.935px",
         fontWeight: '300',
         padding: "5px 8px",
         textTransform: "uppercase",
         letterSpacing: "9.427px"
        }}>
        Use this cover
        </Box>
      </Box>
    </Box>
  );
};

export default SelectBookCoverCard;
