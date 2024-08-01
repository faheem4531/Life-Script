import { Box, CircularProgress } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { getBookCover } from "@/store/slices/chatSlice";
import { styled } from "@mui/material/styles";
import GlobelBtn from "../button/Button";

interface SelectBookCoverCardProps {
  landScape?: string;
  title?: string;
  subtitle?: string;
  Byline?: string;
  droppedImage?: any;
  ColourPalette?: string;
  finalCover: string;
  isLoading?: boolean;
}

const SelectBookCoverCard: React.FC<SelectBookCoverCardProps> = ({
  landScape,
  title = "",
  subtitle = "",
  Byline = "",
  ColourPalette = "",
  droppedImage,
  finalCover,
  isLoading = false,
}) => {
  const currentPath = usePathname();
  const router = useRouter();
  const dispatch: any = useDispatch();
  const { t } = useTranslation();
  const { CoverNumber } = router.query;
  const [coverNumber, setCoverNumber] = useState<string | null>(null);
  const [Loading, setLoading] = useState(false);

  const WhiteLogo = styled("img")({
    filter: "invert(70%) brightness(200%)",
  });

  const handleEditClick = () => {
    setLoading(true);

    if (landScape) {
      router.push(
        `/dashboard/BookCover/ViewBookCover?CoverNumber=${landScape}`
      );
    } else {
      router.push("/dashboard/BookCover/SelectBookCover");
    }
  };
  return (
    <Box
      sx={{
        position: "relative",
        "&:hover .hoverBox": {
          display:
            currentPath ===
            `/dashboard/BookCover/ViewBookCover?CoverNumber=${CoverNumber}`
              ? "flex"
              : "none",
          cursor: "pointer",
        },
      }}
    >
      {currentPath === "/dashboard/BookView" && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            m: "30px 0 20px",
          }}
        >
          <GlobelBtn
            btnText="Edit"
            onClick={handleEditClick}
            isLoading={Loading}
          />
        </Box>
      )}
      <Box
        sx={{
          bgcolor: "#dededd",
          borderRadius: "4px",
          width: "100%",
          height: "100%",
          p: "30px 20px",
          overflowX: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "2px",
          }}
        >
          {ColourPalette && (
            <Box
              sx={{
                width: { xs: "260px", md: "240px", lg: "287.611px" },
                height: "414.319px",
                bgcolor:
                  CoverNumber === "2" || landScape === "2"
                    ? "#FFFFFF"
                    : ColourPalette.length === 0
                    ? "#197065"
                    : ColourPalette,
                color: "white",
                textAlign: "center",
                p: "10px",
              }}
            ></Box>
          )}
          <Box
            sx={{
              bgcolor:
                CoverNumber === "2" || landScape === "2"
                  ? "#FFFFFF"
                  : ColourPalette && ColourPalette.length === 0
                  ? "#197065"
                  : ColourPalette,
              color: "white",
              fontSize: "9.924px",
              fontWeight: "300",
              padding: "5px 8px",
              display: "flex",
              height: "415px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              <Box
                sx={{
                  color: landScape === "5" ? "white" : "black",
                }}
              >
                {title.length === 0 ? (
                  <span> {t("BookCoverCard.title")}</span>
                ) : (
                  title
                )}{" "}
                |{" "}
                {subtitle.length === 0 ? (
                  <span> {t("BookCoverCard.author")}</span>
                ) : (
                  subtitle
                )}
              </Box>
              <Box
                sx={{
                  color: landScape === "5" ? "white" : "black",
                  transform: "rotate(0deg)",
                  marginBottom: "10px",
                }}
              >
                {landScape === "5" || CoverNumber === "5" ? (
                  <WhiteLogo
                    src="https://lifescript-media.s3.eu-north-1.amazonaws.com/logo.svg"
                    alt="Logo"
                    width={25}
                    height={60}
                  />
                ) : (
                  <Image
                    src="https://lifescript-media.s3.eu-north-1.amazonaws.com/logo.svg"
                    alt=""
                    width={25}
                    height={60}
                  />
                )}
              </Box>
            </Box>
          </Box>

          <Box
            id="selectBookCoverCard"
            sx={{
              textAlign: "center",
              padding: 0,
              margin: 0,
              gap: 0,
            }}
          >
            {isLoading ? (
              <CircularProgress />
            ) : (
              <img
                width={290}
                height={414}
                src={finalCover}
                alt="Cover Image"
              />
            )}
          </Box>
        </Box>
      </Box>
      <Box
        className="hoverBox"
        sx={{
          position: "absolute",
          top: "0px",
          left: "0px",
          background: "rgba(0, 0, 0, 0.46)",
          zIndex: "22",
          width: "100%",
          height: "100%",
          borderRadius: "6.077px",
          display: "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            color: "white",
            fontSize: { xs: "18px", md: "20px", lg: "26.935px" },
            fontWeight: "300",
            padding: "5px 8px",
            textTransform: "uppercase",
            letterSpacing: "9.427px",
            textAlign: "center",
          }}
        >
          {t("BookCoverCard.UseThisCover")}
        </Box>
      </Box>
    </Box>
  );
};

export default SelectBookCoverCard;
