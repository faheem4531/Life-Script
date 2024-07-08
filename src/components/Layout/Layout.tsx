import { useState, useEffect } from "react";
import {
  updatePartner,
  addChildren,
  addParent,
  uploadImage,
  uploadImageFamilyTree,
  getTreeData,
  resetTreeData,
  setBookData,
  getBookData

} from "@/store/slices/chatSlice";

import NavBar from "@/components/dashboardComponent/Navbar";
import SideBar from "@/components/dashboardComponent/Sidebar";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import styles from "./Layout.module.css";
import Joyride from 'react-joyride';
interface LayoutProps {
  children?: React.ReactNode;
  marginLeft?: string;
}
const Layout: React.FC<LayoutProps> = ({ children, marginLeft }) => {
  const [run, setRun] = useState(true);
  const [stepIndex, setStepIndex] = useState(1);
  const [handleSideBar, setHandleSideBar] = useState(false);
  const dispatch: any = useDispatch();


  const steps = [
    {
      target: ".no",
      content: ""
    },
    {
      target: '.step1',
      title: "Step 1/10",
      content: 'Here, you can monitor your writing progress at a glance.',
    },
    {
      target: '.step2',
      title: "Step 2/10",
      content: 'Check out your achievements as you make progress on your book.',
    },
    {
      target: '.step3',
      title: "Step 3/10",
      content: 'Click here for quick access to the in progress chapters.',
    },
    {
      target: '.step4',
      title: "Step 4/10",
      content: 'This section provides quick access to each of your recent chapters.',
    },
    {
      target: '.step5',
      title: "Step 5/10",
      content: 'Click here to view your digital book and order a hardcover copy.',
    },
    {
      target: '.step6-Chapters',
      title: "Step 6/10",
      content: 'Begin writing your first chapter and see all chapters in progress here.',
    },
    {
      target: '.step7-TableOfContent',
      title: "Step 7/10",
      content: 'Here you can include, exclude, and organize the chapters within your book.',
    },
    {
      target: '.step8-FamilyTree',
      title: "Step 8/10",
      content: 'Start building your family tree by clicking on the avatar picture.',
    },
    {
      target: '.step9-BookCovers',
      title: "Step 9/10",
      content: 'Click on any book cover design to personalize it according to your preference.',
    },
    {
      target: '.step10-tutorials',
      title: "Step 10/10",
      content: 'Discover detailed video guides for every feature and action available on Lifescript.',
    },
  ];

  const handleJoyrideCallback = (data) => {
    const { status, action, type, index } = data;

    if (type === "step:after" && action === "next") {
      setStepIndex((prevIndex) => prevIndex + 1);
    } else if (type === "step:after" && action === "prev" && index > 1) {
      setStepIndex((prevIndex) => prevIndex - 1);
    } else if (status === "finished" || status === "skipped") {
      dispatch(setBookData({ isWelcome: true }))
        .unwrap()
    }
  };

  const checkElementsExist = () => {
    const stepElements = [
      ".step1",
      ".step2",
      ".step3",
      ".step4",
      ".step5",
      ".step6-Chapters",
      ".step7-TableOfContent",
      ".step8-FamilyTree",
      ".step9-BookCovers",
      ".step10-tutorials",
    ];

    return stepElements.every((selector) => document.querySelector(selector));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (checkElementsExist()) {
        dispatch(getBookData())
          .unwrap()
          .then((res) => {
            setRun(res[0]?.isWelcome);
          })

        clearInterval(intervalId);
      }
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  const customButtonStyle = {
    tooltipTitle: {
      color: "#31432f",
      fontSize: "18px",
      fontWeight: "500",

    },
    tooltipContent: {
      color: "#31432f",
      fontSize: "16px",
      padding: "10px 0 0"
    },
    buttonNext: {
      backgroundColor: "#e1683b",
      color: "#fff",
      border: "1px solid #e1683b",
      outline: "none",
      padding: "10px 15px",
      fontSize: "14px",
      borderRadius: "5px",
    },
    buttonBack: {
      display: stepIndex === 1 ? "none" : "inline-block",
      color: "#e1683b",
      border: "1px solid #e1683b",
      padding: "10px 15px",
      fontSize: "14px",
      borderRadius: "5px",
    },
    buttonSkip: {
      color: "#e1683b",
      border: "1px solid #e1683b",
      padding: "10px 15px",
      fontSize: "14px",
      borderRadius: "5px",
    },
  };

  return (
    <Box>
      <Joyride
        steps={steps}
        run={!run}
        stepIndex={stepIndex}
        callback={handleJoyrideCallback}
        continuous
        scrollToFirstStep
        scrollOffset={10000}
        scrollDuration={1000}
        showSkipButton
        locale={{
          skip: 'Skip Tour',
          next: 'Next',
          back: 'Back',
          last: 'Finish',
        }}
        styles={customButtonStyle}
      />

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
              marginLeft: { lg: marginLeft ? marginLeft : "220px", md: "0px", sm: 0, xs: 0 },
            }}
            onClick={() => setHandleSideBar(false)}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
