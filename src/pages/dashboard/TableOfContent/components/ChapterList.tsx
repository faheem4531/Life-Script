import ModalImage from "@/_assets/svg/Frame.svg";
import { Box, Typography } from "@mui/material"; // Import necessary MUI components
import Image from "next/image";
import { useEffect, useState } from "react";

import GlobelBtn from "@/components/button/Button";
import { createToc, getToc, selectTocData } from "@/store/slices/chatSlice";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
const ChaptersList = ({ listItems, selectedItems, handleItemClick }) => {
  const [chapterIndexing, setChapterIndexing] = useState([]);
  const [indexing, setIndexing] = useState(1);
  const tocData = useSelector(selectTocData);
  const [loading, setLoading] = useState(false);
  const dispatch: any = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getToc());
  }, []);

  useEffect(() => {
    if (tocData?.tableOfContent?.length > 0) {
      setChapterIndexing(tocData?.tableOfContent);
      setIndexing(tocData?.tableOfContent.length + 1);
    }
  }, [tocData]);

  const selectChapter = (chapter) => {
    const newObject = {
      chapterId: chapter?.chapterId,
      title: chapter?.title,
      index: indexing,
    };

    // Check if newObject already exists in chapterIndexing
    const existingIndex = chapterIndexing.findIndex(
      (item) => item.chapterId === newObject.chapterId
    );

    if (existingIndex !== -1) {
      // If newObject already exists, remove it
      setChapterIndexing((prevIndexing) =>
        prevIndexing.filter((item, index) => index !== existingIndex)
      );

      // Decrement the index of chapters with index greater than the removed chapter
      setChapterIndexing((prevIndexing) =>
        prevIndexing.map((item, index) => {
          return {
            ...item,
            index: index + 1,
          };
        })
      );

      setIndexing(indexing - 1);
    } else {
      // If newObject doesn't exist, add it
      setChapterIndexing((prevIndexing) => [...prevIndexing, newObject]);
      setIndexing(indexing + 1);
    }
  };

  const getIndexingIfExists = (chapterId) => {
    // Find the object with the matching chapterId in chapterIndexing
    const matchingObject = chapterIndexing?.find(
      (item) => item.chapterId === chapterId
    );

    if (matchingObject) {
      // If the object exists, return the indexing value
      return matchingObject.index;
    } else {
      // If the object doesn't exist, return 0
      return 0;
    }
  };

  const handleChapterIndexing = () => {
    setLoading(true);
    dispatch(createToc({ tableOfContent: chapterIndexing }))
      .unwrap()
      .then(() => {
        handleItemClick();
        dispatch(getToc());
      })
      .catch(() => setLoading(false));
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        height: "77vh",
      }}
    >
      <Box>
        <Box
          sx={{
            width: { md: "145px", sm: "66.54px", xs: "41.709px" },
            height: { md: "60.005px", sm: "43.607px", xs: "27.334px" },
            margin: "auto",
          }}
        >
          <Image
            alt="image"
            src={ModalImage}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: { md: "32px", sm: "21.679px", xs: "15.508px" },
            fontWeight: 500,
            color: "#E1683B",
            fontFamily: "Avenir8 !important",
            margin: { sm: "10px 0 20px ", xs: "10px 0px" },
          }}
        >
          {t("TOC.ch")}
        </Typography>
      </Box>

      <Box
        sx={{
          flex: "1",
          overflowY: "scroll",
          '&::-webkit-scrollbar': {
          width: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#7F886B',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#7F886B',
        },
          
        }}
      >
        {listItems?.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: "100%",
              bgcolor:
                getIndexingIfExists(item.chapterId) !== 0
                  ? "#7F886B"
                  : "#F9F9F9",
              color:
                getIndexingIfExists(item.chapterId) !== 0 ? "white" : "#30422E",
              borderRadius: "6.091px",
              mb: "10px",
              borderLeft: "8.25px solid #7F886B",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
                p: { md: "10px 25px", sm: "8px 20px", xs: "5px 8px" },
                borderRadius: "6.091px",
                height: "54px",
                cursor: "pointer",
              }}
              onClick={() => selectChapter(item)}
            >
              <Typography
                sx={{
                  fontSize: { md: "16.5px", sm: "16.259px", xs: "11.631px" }
                }}
              >
                {item.title}
              </Typography>
              {getIndexingIfExists(item.chapterId) !== 0 && (
                <Typography
                  sx={{
                    borderRadius: "4px",
                    bgcolor: "#fff",
                    color: "#30422E",
                    width: "20px",
                    padding: "5px 14px 3px",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {getIndexingIfExists(item.chapterId)}
                </Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      <Box m={"24px auto 0px"}>
        <GlobelBtn
          bgColor="#E1683B"
          color="white"
          borderRadius="4px"
          btnText={
            !loading
              ? `${t("TOC.addChBtn")}  (${chapterIndexing?.length})`
              : `${t("TOC.adding")} (${chapterIndexing?.length})`
          }
          onClick={!loading && handleChapterIndexing}
          width={"100%"}
        />
      </Box>
    </Box>
  );
};

export default ChaptersList;
