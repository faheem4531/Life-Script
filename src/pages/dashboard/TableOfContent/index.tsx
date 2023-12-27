import Layout from "@/components/Layout/Layout";
import SubscriptionHeader from "@/components/dashboardComponent/subscriptionHeader";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
import styles from "@/styles/Dashboard.module.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import addIcon from "../../../../public/addicon.svg";
import ChaptersList from "./components/ChapterList";
import {
  createToc,
  getToc,
  selectTocData,
  getChapters,
} from "@/store/slices/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import DraggableList from "@/components/dashboardComponent/DraggableList";
import NoQuestions from "@/components/dashboardComponent/NoQuestions";

const TableOfContent = () => {
  const dispatch: any = useDispatch();
  const tocData = useSelector(selectTocData);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [listItems, setListItems] = useState<
    Array<{ id: number; name: string; chapterId: string }>
  >([]);

  useEffect(() => {
    dispatch(getChapters())
      .unwrap()
      .then((res) => {
        const updatedListItems = res.map((chapter, index) => ({
          id: index + 1,
          title: chapter.title,
          chapterId: chapter._id,
        }));

        setListItems(updatedListItems);
      });
  }, []);

  useEffect(() => {
    dispatch(getToc());
  }, []);

  useEffect(() => {
    tocData && setSelectedItems(tocData?.tableOfContent);
  }, [tocData]);

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
                height: "80%",
                overflowY: "auto",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {selectedItems?.length > 0 ? (
                <DraggableList data={selectedItems} />
              ) : (
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    padding: {
                      sm: "30px 46px 16px 37px",
                      xs: "25px 20px 100px",
                    },
                    marginTop: "10px",
                    height: "calc(100vh - 357px)",
                    borderRadius: { sm: "18px", xs: "5px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <NoQuestions />
                </Box>
              )}
            </Box>
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
          handleItemClick={() => setOpenModal(false)}
        />
      </CustomizationDialog>
    </div>
  );
};

export default TableOfContent;
