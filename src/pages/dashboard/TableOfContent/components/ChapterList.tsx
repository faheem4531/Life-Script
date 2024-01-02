import ModalImage from "@/_assets/png/view-template-modal.png";
import { Box, ButtonBase, Typography } from "@mui/material"; // Import necessary MUI components
import Image from "next/image";
import { useEffect, useState } from "react";

import { createToc, getToc, selectTocData } from "@/store/slices/chatSlice";
import { useDispatch, useSelector } from "react-redux";
const ChaptersList = ({
  listItems,
  selectedItems,
  handleItemClick,
}) => {
    const [chapterIndexing, setChapterIndexing] = useState([]);
    const [indexing, setIndexing] = useState(1);
    console.log("indexing",indexing);
    const tocData = useSelector(selectTocData);
    const [loading, setLoading] = useState(false);
    const dispatch:any = useDispatch();

    useEffect(() => {
        dispatch(getToc())
    },[]);

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
            return item;
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
        height: "78vh",
      }}
    >
      <Box>
        <Box
          sx={{
            width: "74px",
            margin: "auto",
          }}
        >
          {/* Assuming ModalImage is imported and provided as a prop */}
          <Image alt="image" src={ModalImage} width={74} />
        </Box>
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: 500,
            color: "#070707",
            margin: "24px 0",
          }}
        >
          Chapters
        </Typography>
      </Box>

      <Box
        sx={{
          flex: "1",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {listItems?.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: "100%",
              bgcolor: getIndexingIfExists(item.chapterId) !== 0 ? "#197065" : "#F9F9F9",
              color: getIndexingIfExists(item.chapterId) !== 0 ? "white" : "black",
              borderRadius: "6.091px",
              mb: "10px",
              borderLeft: "8.25px solid #186F65",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
                p: "12px 29px",
                borderRadius: "6.091px",
                cursor: "pointer",
              }}
              onClick={() => selectChapter(item)}
            >
              <Typography
                sx={{
                  fontSize: "19.379px",
                }}
              >
                {item.title}
              </Typography>
              {getIndexingIfExists(item.chapterId) !== 0 && (
                <Typography
                  sx={{
                    border: "1px solid white",
                    borderRadius: "50%",
                    color: "white",
                    width: "20px",
                    height: " 20px",
                    fontSize: "9.754px",
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

      <ButtonBase
      onClick={!loading && handleChapterIndexing}
        sx={{
          width: "150px",
          height: "36px",
          borderRadius: "47.865px",
          color: "#fff",
          fontSize: "15px",
          bgcolor: "#197065",
          margin: "24px auto 0px",
          "&:hover": {
            color: "#fff",
            bgcolor: "#197065",
          },
        }}
      >
        {loading ? "Adding..." : `Add (${chapterIndexing?.length})`}
      </ButtonBase>
    </Box>
  );
};

export default ChaptersList;
