import { useState } from "react";

import NavBar from "@/components/dashboardComponent/Navbar";
import SideBar from "@/components/dashboardComponent/Sidebar";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styles from "./Layout.module.css";

interface LayoutProps {
  children?: React.ReactNode;
  marginLeft?: string;
}
const Layout: React.FC<LayoutProps> = ({ children, marginLeft }) => {
  const [handleSideBar, setHandleSideBar] = useState(false);

  const router = useRouter();
  const dispatch: any = useDispatch();

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          right: "0",
          left: { lg: "220px", sm: 0, xs: 0 },
          top: "0",
          zIndex: "10",
        }}
      >
        <NavBar sideBarHandle={() => setHandleSideBar(true)} />
      </Box>
      <Box
        sx={{
          marginTop: "1px",
          display: "flex",
          mt: { xs: "50px", lg: "70px" },
        }}
      >
        <Box
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.76)",
            width: handleSideBar && "100%",
            height: "100vh",
            position: "fixed",
            top: "0px",
            left: "0px",
            zIndex: "12",
          }}
          className={`${styles.display} ${handleSideBar && styles.displayShow}`}
          onClick={() => setHandleSideBar(false)}
        >
          <Box
            sx={{
              width: "220px",
              backgroundColor: "#F3ECDA",
              minHeight: "100vh",
              height: "100%",
              position: "relative",
              overflowY: "auto",
              zIndex: "2",
              pb: { lg: "100px", sm: "20px" },
              "&::-webkit-scrollbar": {
                display: "none", // WebKit browsers (Chrome, Safari, etc.)
              },
              scrollbarWidth: "none", // Firefox
            }}
            onClick={(event) => {
              event.stopPropagation();
            }}
            className={`${styles.display} ${handleSideBar && styles.displayShow
              }`}
          >
            <SideBar
              handleSideCheck={handleSideBar}
              menuClick={() => setHandleSideBar(false)}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            // maxWidth: "1600px",
            color: "#000",
            height: "100%",
            minHeight: "calc(100vh - 70px)",
            padding: { sm: "10px 33px 30px" },
            marginLeft: { lg: marginLeft?marginLeft:"220px", md: "0px", sm: 0, xs: 0 },
          }}
          onClick={() => setHandleSideBar(false)}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
