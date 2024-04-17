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
import Check from "../../_assets/svg/bgTickIcon.svg";
import styles from "./AddChapterName.module.css";
import { useRouter } from "next/router";



const AddChapterName = ({
  chapter,
  chapterId,
  title,
  subTitle,
  StarterChapter,
}: {
  chapter: string;
  chapterId: any;
  title?: string;
  subTitle?: string;
  StarterChapter?: boolean;
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
      }}
    >
      <Box
        sx={{
          padding: { sm: "10px 15px", xs: "5px 10px" },
          marginTop: "-50px",
          position: "relative",
          zIndex: "1",
        }}
        >
        <Box sx={{borderRadius:"3px", backgroundColor:"white", width:"40px", height:"30px",display:"flex" ,justifyContent:"center", alignItems:"center",cursor:"pointer", border: "1px solid #E1693B", color:"#E1693B"}}
        onClick={() => router.back()}
        >
          {"<--"} 
        </Box>

        <Box>
        {title === "templateView" && (
          <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", marginLeft:"80px"}}>
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
                  lg: "39.707px",
                },
              }}
            >
              {chapter}
            </Typography>
          </Box>
        )}
        </Box>
        {title != "templateView" && (
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "22px",
                  sm: "24.707px",
                  md: "28px",
                  lg: "39.707px",
                },
                fontWeight: 600,
              }}
            >
              {t("ChName.ChName")}
            </Typography>
            {/* <Box>
              <TextField
                variant="outlined"
                value={chapterName}
                onChange={(e: any) => setChapterName(e.target.value)}
                disabled={StarterChapter}
                placeholder="My Adventurous Life"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Box sx={{ cursor: "pointer", mb: "-6px" }}>
                        <Image
                          onClick={saveChapterName}
                          src={Check}
                          alt="check-icon"
                          style={{
                            width: "22.259px",
                          }}
                        />
                      </Box>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  marginTop: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: { sm: "50px", md: "20px" },
                    backgroundColor: "white",
                  },
                  width: { sm: "300px", lg: "390px" },
                }}
              />
            </Box> */}
          </Box>
        )}
      </Box>
      <Box
        sx={{
          background: { xs: "transparent", sm: "#d6d3c1" },
          height: {
            sm: "400px",
          },
          width: {
            xs: "230px",
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
        <Image src={BookImage} alt="book image" className={styles.bookImage} />
      </Box>
    </Box>
  );
};

export default AddChapterName;
