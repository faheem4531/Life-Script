import NavBar from "@/components/dashboardComponent/Navbar";
import SideBar from "@/components/dashboardComponent/Sidebar";
import { Box, TextField, Typography } from "@mui/material";
import RichTextEditor from "./richtext";

export default function Answers() {
  return (
    <Box sx={{ backgroundColor: "#FFF9F0", overflowX: "hidden", }}>
      <Box sx={{ position: "fixed", right: "0", left: "0", top: "0", zIndex: "2" }}>
        <Box sx={{ position: "fixed", right: "0", left: "0", top: "0", zIndex: "2" }}>
          <NavBar />
        </Box>
      </Box>
      <Box sx={{ marginTop: "1px", display: "flex", mt: "70px" }}>
        <Box sx={{ width: "220px", backgroundColor: "#197065", position: "fixed", bottom: "0", top: "70px", zIndex: "2" }}>
          <SideBar />
        </Box>
        <Box
          sx={{
            width: "100%",
            minHeight: "90vh",
            padding: "36px 33px 100px",
            marginLeft: "220px"
          }}
        >
          <Typography sx={{color:'black', fontSize:'45px',fontWeight:'700'}}>My Adventorus Life {'>'} <span style={{ fontSize: '43px', fontWeight:'400' }}>The best job I’ve ever had</span></Typography>
          <Box
            sx={{
              maxWidth: "1000px",
              margin: "0 auto"
            }}
          >
            
            

            <RichTextEditor />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
