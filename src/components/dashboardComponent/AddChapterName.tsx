import { updateChapter } from "@/store/slices/chatSlice";
import { Box, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import BookImage from "@/_assets/png/hero-book.png";
import Back from "@/_assets/svg/back-icon.svg";
import Check from "../../_assets/svg/bgTickIcon.svg";
import Book from "../../_assets/svg/gift-book.svg";
import styles from "./AddChapterName.module.css";
import { useRouter } from "next/router";

import Edit from "@/_assets/svg/edit-chapter.svg";

const AddChapterName = ({
  chapter,
  chapterId,
  title,
  subTitle,
  StarterChapter,
  editChapter,
}: {
  chapter: string;
  chapterId: any;
  title?: string;
  subTitle?: string;
  StarterChapter?: boolean;
  editChapter: (value: boolean) => void;
}) => {
  const [chapterName, setChapterName] = useState("");
  const dispatch: any = useDispatch();
  const { t } = useTranslation();

  const saveChapterName = () => {
    dispatch(updateChapter({ title: chapterName, id: chapterId }))
      .then(() => {
        toast.success("Chapter name updated successfully");
      })
      .catch(() => {
        toast.error("Failed to update chapter name");
      });
  };

  useEffect(() => {
    chapter && setChapterName(chapter);
  }, [chapter]);

  const router = useRouter();

  return (
    <Box
      sx={{
        backgroundColor: "#F3ECDA",
        color: "#30422E",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "165px",
        overflow: "hidden",
        width: "100%",
        position: "relative",
      }}
    >
      {title !== "noBack" && (
        <Box
          sx={{
            borderRadius: "3px",
            backgroundColor: "white",
            position: "absolute",
            top: 12,
            left: 12,
            width: "48px",
            height: "36px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            border: "1px solid #E1693B",
            color: "#E1693B",
          }}
          onClick={() => router.back()}
        >
          <Image src={Back} alt="back icon" />
        </Box>
      )}
      <Box
        sx={{
          padding: { sm: "10px 15px", xs: "5px 10px" },
          position: "relative",
          zIndex: "1",
        }}
      >
        <Box>
          {/* {title === "templateView" && ( */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: title !== "noBack" ? "80px" : "30px",
            }}
          >
            {subTitle && (
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "18.px",
                    md: "20px",
                    lg: "22.707px",
                  },
                }}
              >
                {subTitle}
              </Typography>
            )}
            <Typography
              sx={{
                fontSize: {
                  xs: "25px",
                  sm: "28.707px",
                  md: "32px",
                  lg: "45px",
                },
                fontWeight: 700,
              }}
            >
              {chapter}

              {title === "chapterName" && (
                <Image
                  src={Edit}
                  style={{ margin: "0 0 10px 15px", cursor: "pointer" }}
                  alt="back icon"
                  onClick={() => editChapter(true)}
                />
              )}
            </Typography>
          </Box>
        </Box>
      </Box>
      {title !== "gift" && title !== "refer" && (
        <Box
          sx={{
            background: { xs: "transparent", sm: "#d6d3c1" },
            height: {
              sm: "400px",
            },
            width: {
              xs: "0px",
              sm: "260px",
              lg: "360px",
            },
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            borderTopLeftRadius: "50%",
            borderBottomLeftRadius: "50%",
          }}
        >
          <Image
            src={BookImage}
            alt="book image"
            className={styles.bookImage}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      )}
      {(title === "gift" || title === "refer") && (
        <Box
          sx={{
            background: { xs: "transparent", sm: "#babaa7" },
            height: {
              sm: "400px",
            },
            width: {
              xs: "230px",
              sm: "260px",
            },
            display: { sm: "flex", xs: "none" },
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: "120%",
            borderBottomLeftRadius: "70%",
          }}
        >
          <Image alt="Book" src={Book} />
        </Box>
      )}
    </Box>
  );
};

export default AddChapterName;
