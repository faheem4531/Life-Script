import NavBar from "@/components/dashboardComponent/Navbar";
import SideBar from "@/components/dashboardComponent/Sidebar";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import RichText from "./richtext";
export default function Answers() {
  const router = useRouter();
  const { chapterName } = router.query;
  console.log("textttt", chapterName);

  return (
    <Box
      sx={{
        maxHeight: "100vh",
        // overflowY: 'hidden'
      }}
    >
      <Box sx={{ backgroundColor: "#FFF9F0", overflowX: "hidden" }}>
        <Box
          sx={{
            position: "fixed",
            right: "0",
            left: "0",
            top: "0",
            zIndex: "2",
          }}
        >
          <Box
            sx={{
              position: "fixed",
              right: "0",
              left: "0",
              top: "0",
              zIndex: "2",
            }}
          >
            <NavBar />
          </Box>
        </Box>
        <Box sx={{ marginTop: "1px", display: "flex", mt: "70px" }}>
          <Box
            sx={{
              width: "220px",
              backgroundColor: "#197065",
              position: "fixed",
              bottom: "0",
              top: "70px",
              zIndex: "2",
            }}
          >
            <SideBar />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              padding: "30px 100px 30px",
              marginLeft: "220px",
            }}
          >
            <Box
              sx={{
                borderRadius: "10px",
                width: "100%",
                // border: "1px solid black",
                backgroundColor: "white",
                maxHeight: "70px",
                overflowY: "auto",
                p: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontSize: "38px", fontWeight: "500" }}>
                {chapterName}
              </Typography>
            </Box>
            {/* <Typography sx={{color:'black', fontSize:'45px',fontWeight:'700'}}>My Adventorus Life {'>'} <span style={{ fontSize: '43px', fontWeight:'400' }}>The best job I’ve ever had</span></Typography> */}
            <Box>
              <RichText />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
