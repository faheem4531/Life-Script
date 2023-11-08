import NavBar from "@/components/dashboardComponent/Navbar";
import SideBar from "@/components/dashboardComponent/Sidebar";
import { Box } from "@mui/material";
import RichTextEditor from "./richtext";

export default function Answers() {
  return (
    <Box sx={{ backgroundColor: "#FFF9F0", overflowX: "hidden" }}>
      <NavBar />
      <Box sx={{ marginTop: "1px", display: "flex" }}>
        <Box sx={{ width: "220px", backgroundColor: "#197065" }}>
          <SideBar />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "90vh",
            padding: "10px 80px",
          }}
        >
          <RichTextEditor />
        </Box>
      </Box>
    </Box>
  );
}
