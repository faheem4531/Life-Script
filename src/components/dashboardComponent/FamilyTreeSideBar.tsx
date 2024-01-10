import MenuIcon from "@/_assets/svg/sidebar/menuIcon.svg";
import Logo from "@/_assets/svg/white-logo.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CameraIcon from "../../_assets/svg/cameraIcon.svg";
import FemaleProfile from "../../_assets/svg/femaleProfileIcon.svg";
import MaleProfile from "../../_assets/svg/maleProfileIcon.svg";
import Profile from "../../_assets/svg/profile.svg";
import styles from "./Sidebar.module.css";
import * as d3 from "d3";
import { selectTreeData } from "@/store/slices/chatSlice";
import { useSelector } from "react-redux";

const FamilyTreeSideBar = ({ menuClick, handleSideCheck }) => {
  const [childsOpen, setChilsdOpen] = useState(true);
  const router = useRouter();

  const familyTreeData = useSelector(selectTreeData);
  const[allNodes, setAllNodes] = useState([]);
  console.log("8888888",allNodes, "66", allNodes[0]?.Node?.data , "7777",familyTreeData);
  const totalNodes = d3.hierarchy(familyTreeData, (d) => d.childrens);

  useEffect(() => {
    if(familyTreeData){
      const tree = d3
      .tree()
      .separation((a, b) => {
        return a.children && a.children === b.children ? 1 : 0.5;
      })
      .size([1200, 2200]);
      const nodes = d3.hierarchy(familyTreeData, (d) => d.childrens);
      const treeNodes = tree(nodes);
      const descendants = treeNodes.descendants().slice(1);
      setAllNodes([...descendants]);
    }
  },[familyTreeData])

  return (
    <Box sx={{ color: "#fff", backgroundColor: "#197065" }}>
      {!handleSideCheck && (
        <Box sx={{ padding: "13px 20px", height: "70px" }}>
          <Image src={Logo} alt="logo" className={styles.logo} />
        </Box>
      )}
      {handleSideCheck && (
        <Box
          sx={{
            height: "48px",
            display: "flex",
            alignItems: "center",
            ml: "8px",
          }}
          onClick={menuClick}
        >
          <Image src={MenuIcon} alt="MenuIcon" />
        </Box>
      )}
      <Box
        sx={{
          borderTop: "1px solid #fff",
          bgcolor: "#FFF",
          color: "black",
          height: { lg: "calc(100vh - 70px)", xs: "calc(100vh - 45px)" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { md: "14.865px", xs: "12px" },
              color: "black",
              p: { md: "20px 15px", sm: "15px 15px", xs: "10px 15px" },
              borderBottom: "1px solid #ECECEC",
            }}
          >
            Khawaja Family Tree
          </Typography>
          <Box
            sx={{
              fontSize: { md: "14.865px", xs: "12px" },
              color: "black",
              p: { md: "20px", sm: "15px", xs: "10px" },
              borderBottom: "1px solid #ECECEC",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: { md: "54.875px", sm: "45px", xs: "35px" },
                height: { md: "54.875px", sm: "45px", xs: "35px" },
                borderRadius: "50%",
                border: "1px solid #186F65",
                position: "relative",
                margin: "auto",
              }}
            >
              <Image
                src={Profile}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
              <Box
                sx={{
                  width: { md: "14px", sm: "12px", xs: "10px" },
                  height: { md: "14px", sm: "12px", xs: "10px" },
                  bgcolor: "#186F65",
                  position: "absolute",
                  right: "-2px",
                  bottom: "5px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={CameraIcon}
                  alt=""
                  style={{
                    width: "8px",
                    height: "8px",
                  }}
                />
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: { md: "14.865px", xs: "12px" },
                color: "black",
                mt: "10px",
              }}
            >
              Haseeb Khawaja
            </Typography>
            <Typography
              sx={{
                fontSize: { md: "11.865px", xs: "10px" },
                color: "black",
                mt: "2px",
              }}
            >
              Year of Birth 1990
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Box padding="35px 29px 30px 15px">
            <button
              style={{
                background: "transparent",
                color: "black",
                border: "0px",
                width: "100%",
              }}
            >
              <Box
                onClick={() => {
                  setChilsdOpen(!childsOpen);
                }}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>Family Tree</Box>
                {childsOpen ? (
                  <KeyboardArrowDownIcon
                    sx={{
                      width: { xs: "15px", md: "24px" },
                      ml: "5px",
                      mt: "3px",
                      color: "#197065",
                    }}
                  />
                ) : (
                  <KeyboardArrowUpIcon
                    sx={{
                      width: { xs: "15px", md: "24px" },
                      ml: "5px",
                      color: "#197065",
                      mt: "3px",
                    }}
                  />
                )}
              </Box>
              {childsOpen && (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      p: "10px 5px",
                    }}
                  >
                    <Image src={MaleProfile} alt="profile" />
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { md: "9.832px", xs: "8px" },
                          color: "black",
                        }}
                      >
                        Haseeb Khawaja
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { md: "7.079px", xs: "6px" },
                          color: "#BDBDBD",
                        }}
                      >
                        Year of Birth 1990
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      p: "10px 5px",
                    }}
                  >
                    <Image src={FemaleProfile} alt="profile" />
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { md: "9.832px", xs: "8px" },
                          color: "black",
                        }}
                      >
                        Haseeb Khawaja
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { md: "7.079px", xs: "6px" },
                          color: "#BDBDBD",
                        }}
                      >
                        Year of Birth 1990
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              )}
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FamilyTreeSideBar;
