import ModalImage from "@/_assets/svg/Frame.svg";
import Book from "@/_assets/svg/viewbook.svg";
import FamilyTree from "@/_assets/svg/overview-family-tree.svg";
import {
  getChapters,
  selectAllChapters,
  getPrintingBookStatus,
} from "@/store/slices/chatSlice";
import { selectLuluPaymentStatus } from "@/store/slices/authSlice";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import GlobelBtn from "../button/Button";
import CustomizationDialog from "../modal/CustomizationDialog";
import TransitionsDialog from "../modal/TransitionDialog";
import styles from "./Custom.module.css";
import TooltipTab from "@/__webComponents/tooltip/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export const ViewBook = () => {
  const dispatch: any = useDispatch();
  const chapters = useSelector(selectAllChapters);
  const [viewReady, setViewReady] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [buyPremium, setBuyPremium] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const jwt = require("jsonwebtoken");
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt.decode(token);
      const accessRole = decodedToken.accessRole;
      if (accessRole !== "FreePlan") {
        setIsPremium(true);
      }
    }
  }, []);

  useEffect(() => {
    dispatch(getChapters());
  }, [dispatch]);

  useEffect(() => {
    if (chapters.length > 0) {
      const inProgressChapters = chapters.filter(
        (chapter) => chapter.status !== true
      );
      inProgressChapters.length > 0 ? setViewReady(false) : setViewReady(true);
    }
  }, [chapters]);

  const router = useRouter();
  const { t } = useTranslation();
  return (
    <>
      <Box
        onClick={() => {
          if (!viewReady) {
            setOpenModal(true);
          } else if (!isPremium) {
            setBuyPremium(true);
          } else {
            router.push("/dashboard/BookView");
          }
        }}
        sx={{
          bgcolor: "#E1683B",
          color: "#fff",
          width: "100%",
          height: "50px",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          cursor: "pointer",
          columnGap: "16px",
        }}
        className={`${styles.viewBook} ${"step5"}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Image alt="next" src={Book} />
        <Typography
          sx={{
            fontSize: { xl: "21px", sm: "18px", xs: "14px" },
            fontWeight: 500,
          }}
        >
          {t("overView.ViewBtn")}
        </Typography>

        {hover && (
          <Box
            sx={{
              display: {
                md: "block",
                xs: "block",
              },
              // position: "absolute",
              // mt: 1
            }}
          >
            <TooltipTab
              title=""
              text={t("overView.viewBtnSuggestion")}
              transform="none" // adjust transform if needed
              top={undefined}
              left={undefined}
              bottom={"55px"}
              right={undefined}
              position={"absolute"}
            />
          </Box>
        )}
      </Box>

      <CustomizationDialog
        open={openModal}
        title=""
        marginTop={0}
        handleClose={() => {
          setOpenModal(false);
          router.push("/dashboard/chapters");
        }}
        customStyles={{ backgroundColor: "auto", borderRadius: "22px" }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              width: { md: "120px", sm: "66.161px", xs: "47px" },
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
              fontSize: { md: "22px", sm: "21.679px", xs: "15.508px" },
              fontWeight: 700,
              color: "#070707",
              margin: { md: "25px 0", sm: "15px 0px", xs: "5px" },
            }}
          >
            {t("overView.viewBookModal.title")}
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "16.5px", sm: "16.259px", xs: "11.631px" },
              color: "#070707",
              width: { md: "400px", sm: "300px", xs: "180px" },
              margin: { md: "0 120px", sm: "0px 55px", xs: "0px" },
            }}
          >
            {t("overView.viewBookModal.description")}
          </Typography>
          <Box
            sx={{
              margin: { md: "40px 0 30px", sm: "22px 0", xs: "16px 0" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <GlobelBtn
              btnText={t("overView.viewBookModal.okayBtn")}
              color="white"
              onClick={() => {
                router.push("/dashboard/chapters");
                setOpenModal(false);
              }}
              width={{ md: "234px", sm: "153px", xs: "103px" }}
            />
          </Box>
        </Box>
      </CustomizationDialog>

      <TransitionsDialog
        open={buyPremium}
        heading={t("overView.buyPremiumModal.title")}
        description={t("overView.buyPremiumModal.description")}
        cancel={() => {
          setBuyPremium(false);
        }}
        closeModal={() => {
          setBuyPremium(false);
        }}
        proceed={() => router.push("/dashboard/SubscribePlans")}
      />
    </>
  );
};

export const ViewTree = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [luluStatus, setLuluStatus] = useState("");
  useEffect(() => {
    const lulu = localStorage.getItem("luluStatus");
    setLuluStatus(lulu);
  }, []);
  return (
    <Box
      onClick={() => router.push("/familyTree")}
      sx={{
        bgcolor: "#E1683B",
        cursor: "pointer",
        color: "#fff",
        width: "100%",
        height: "50px",
        borderRadius: "4px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "16px",
      }}
      className={styles.viewTree}
    >
      <Image alt="next" src={FamilyTree} />
      <Typography
        sx={{
          fontSize: { xl: "21px", sm: "18px", xs: "14px" },
          fontWeight: 500,
        }}
      >
        {t("overView.famliyTreeBtn")}
      </Typography>
    </Box>
  );
};

export const PrintBook = () => {
  const { t } = useTranslation();
  const dispatch: any = useDispatch();
  const [luluStatus, setLuluStatus] = useState("Loading...");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    dispatch(getPrintingBookStatus())
      .then((response: any) => {
        console.log("print a book status", response.payload.status);
        setLuluStatus(response.payload.status);
      })
      .catch((error: any) => {
        console.error("Error fetching book status:", error);
      });
  }, [dispatch]);

  return (
    <Box
      sx={{
        color: "#30422E",
        bgcolor: "#fff",
        width: "100%",
        padding: { lg: "30px 30px", xs: "25px" },
        borderRadius: "4px",
        display: "flex",
        flexDirection: { sm: "row", xs: "column" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: "15px",
        border: "1px solid #30422E",
      }}
    >
      <Box sx={{ width: { md: "65%", sm: "85%", xs: "90%" } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            position: "relative",
          }}
        >
          <Typography
            sx={{ fontSize: { xl: "33px", sm: "28px" }, fontWeight: 700 }}
          >
            {t("overView.deliveryTracker")}
          </Typography>
          <Box>
            <Box
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <InfoOutlinedIcon sx={{ color: "#7F886B" }} />
            </Box>

            {hover && (
              <Box
                sx={{
                  display: {
                    md: "block",
                    xs: "block",
                  },
                  // position: "absolute",
                }}
              >
                <TooltipTab
                  title=""
                  text={t("overView.suggestionIcon")}
                  transform="none"
                  top={undefined}
                  left={undefined}
                  bottom={undefined}
                  right={undefined}
                  position={"absolute"}
                />
              </Box>
            )}
          </Box>
        </Box>
        <Typography
          sx={{ fontSize: { xl: "14px", sm: "12px" }, marginTop: "15px" }}
        >
          {t("overView.deliveryDescription")}
        </Typography>
      </Box>
      <Box>
        <GlobelBtn
          isLulu={true}
          bgColor={luluStatus ? "#7F886B" : "#A9A9A9"}
          color="white"
          btnText={luluStatus}
          width={{ xl: "250px", sm: "180px" }}
        />
      </Box>
    </Box>
  );
};
