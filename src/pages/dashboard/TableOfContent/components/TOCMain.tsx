import GlobelBtn from "@/components/button/Button";
import DraggableList from "@/components/dashboardComponent/DraggableList";
import NoQuestions from "@/components/dashboardComponent/NoQuestions";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
import { getChapters, getToc, selectTocData } from "@/store/slices/chatSlice";
import styles from "@/styles/Dashboard.module.css";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import addIcon from "../../../../_assets/svg/AddIcon.svg";
import ChaptersList from "./ChapterList";

const TOCMain = () => {
  const router = useRouter();
  const currentUrl = router.asPath;
  const dispatch: any = useDispatch();
  const tocData = useSelector(selectTocData);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [listItems, setListItems] = useState<
    Array<{ id: number; name: string; chapterId: string }>
  >([]);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getChapters())
      .unwrap()
      .then((res) => {
        const updatedListItems = res
          .filter((chapter) => chapter.startDefaultChapter === false && chapter.status === true && chapter.introductionChapter === false)
          .map((chapter, index) => ({
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
      <Box className={styles.subContainer}>
        {" "}
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: {
              md: "5px 46px 16px 37px",
              sm: "5px 30px 10px 30px",
              xs: "10px 10px 85px",
            },
            marginTop: "10px",
            height: { sm: "calc(100vh - 280px)", xs: "calc(100vh - 160px)" },
            borderRadius: {
              sm: "18px",
              xs: "5px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: { xs: "15px" },
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                color: "rgba(0, 0, 0, 0.87)",
                display: {
                  sm: "block",
                  xs: "none",
                },
              }}
            >
              {t("TOC.ch")}
            </Typography>
            <Box
              sx={{
                gap: { sm: 4, xs: 2 },
                display: "flex",
                justifyContent: { xs: "space-between", sm: "end" },
                width: "100%",
                flexWrap: "wrap",
                pb: "10px",
              }}
            >
              <Box>
                {currentUrl === "/dashboard/BookView" ? (
                  <GlobelBtn
                    btnText={`${t("TOC.editChBtn")}`}
                    image={addIcon}
                    onClick={() => {
                      currentUrl === "/dashboard/BookView" &&
                        router.push("/dashboard/TableOfContent");
                    }}
                  />
                ) : (
                  <GlobelBtn
                    image={addIcon}
                    btnText={`${t("TOC.addChBtn")}`}
                    onClick={() => setOpenModal(true)}
                  />
                )}
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "11px",
              height: { sm: "80%", xs: "100%" },
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
          padding: { md: "20px 48px" },
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

export default TOCMain;
