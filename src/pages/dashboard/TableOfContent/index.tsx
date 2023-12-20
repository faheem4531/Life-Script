import Layout from "@/components/Layout/Layout";
import SubscriptionHeader from "@/components/dashboardComponent/subscriptionHeader";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
import styles from "@/styles/Dashboard.module.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import addIcon from "../../../../public/addicon.svg";
import ChaptersList from "./components/ChapterList";

const TableOfContent = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const listItems = [
    { id: 1, name: "My First Chapter" },
    { id: 2, name: "My Second Chapter" },
    { id: 3, name: "My Third Chapter" },
  ];

  const handleItemClick = (item) => {
    setSelectedItems((prevSelected) => {
      const updatedSelection = { ...prevSelected };
      if (updatedSelection[item.id]) {
        delete updatedSelection[item.id];
      } else {
        updatedSelection[item.id] = item;
      }
      return updatedSelection;
    });
  };
  return (
    <div>
      <Layout>
        <Box className={styles.subContainer}>
          <SubscriptionHeader title="Table of Content" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              marginTop: { xs: "15px" },
            }}
          >
            <Box
              onClick={() => setOpenModal(true)}
              sx={{
                bgcolor: "#197065",
                p: "0px 30px",
                display: "flex",
                alignItems: "center",
                height: "50px",
                borderRadius: "41.25px",
              }}
            >
              <Box sx={{ cursor: "pointer", mb: "-5px" }}>
                <Image src={addIcon} alt="addicon" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#ffff",
                    fontSize: "20.5px",
                    fontWeight: 400,
                    display: { sm: "block", xs: "none" },
                    cursor: "pointer",
                  }}
                >
                  Add Chapters
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#fff",
              padding: { sm: "30px 40px 16px 29px", xs: "25px 20px 100px" },
              marginTop: "10px",
              height: "calc(100vh - 357px)",
              borderRadius: { sm: "18px", xs: "5px" },
            }}
          >
            <Typography
              sx={{
                fontSize: "19.379px",
                fontWeight: 700,
                mb: "35px",
              }}
            >
              Chapters
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "11px",
              }}
            >
              {Object.values(selectedItems).map((item) => (
                <Box
                  sx={{
                    width: "100%",
                    bgcolor: "#F9F9F9",
                    color: "black",
                    borderRadius: "6.091px",
                    mb: "10px",
                    borderLeft: "8.25px solid #186F65",
                  }}
                >
                  <Box
                    key={item.id}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      p: "12px 29px",
                      borderRadius: "6.091px",
                      cursor: "pointer",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "18.825px",
                        fontWeight: 600,
                      }}
                    >
                      {item.id}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "19.379px",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Box>
              ))}
              {/* <DraggableList /> */}
            </Box>

            {/* <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: { sm: "30px 46px 16px 37px", xs: "25px 20px 100px" },
                  marginTop: "10px",
                  height: "calc(100vh - 357px)",
                  borderRadius: { sm: "18px", xs: "5px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <NoQuestions />
              </Box> */}
          </Box>
        </Box>
      </Layout>

      <CustomizationDialog
        open={openModal}
        title=""
        handleClose={() => {
          setOpenModal(false);
        }}
        customStyles={{
          backgroundColor: "auto",
          width: "80vw",
          height: "90vh",
          padding: "20px 48px",
        }}
      >
        <ChaptersList
          listItems={listItems}
          selectedItems={selectedItems}
          handleItemClick={handleItemClick}
          setOpenModal={setOpenModal}
        />
      </CustomizationDialog>
    </div>
  );
};

export default TableOfContent;
