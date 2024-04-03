import BookCoverGreen from "@/_assets/svg/sidebar/book-cover-green.svg";
import AccountGreen from "@/_assets/svg/sidebar/account-green.svg";
import AccountWhite from "@/_assets/svg/sidebar/account-white.svg";
import BookCoverWhite from "@/_assets/svg/sidebar/book-cover-white.svg";
import CompletedGreen from "@/_assets/svg/sidebar/completed-green.svg";
import CompletedWhite from "@/_assets/svg/sidebar/completed-white.svg";
import FaqGreen from "@/_assets/svg/sidebar/faq-green.svg";
import FaqWhite from "@/_assets/svg/sidebar/faq-white.svg";
import HomeGreen from "@/_assets/svg/sidebar/home-green.svg";
import HomeWhite from "@/_assets/svg/sidebar/home-white.svg";
import ProgressGreen from "@/_assets/svg/sidebar/in-progress-green.svg";
import ProgressWhite from "@/_assets/svg/sidebar/in-progress-white.svg";
import MenuIcon from "@/_assets/svg/sidebar/menuIcon.svg";
import MenuIconGreen from "@/_assets/svg/sidebar/menu-green.svg";
import OverViewGreen from "@/_assets/svg/sidebar/overView-green.svg";
import OverViewWhite from "@/_assets/svg/sidebar/overView-white.svg";
import SuportWhite from "@/_assets/svg/sidebar/support-white.svg";
import SubsWhite from "@/_assets/svg/subWhite.svg";
import Subs from "@/_assets/svg/subs.svg";
import SuportGreen from "@/_assets/svg/sidebar/support-green.svg";
import Logo from "@/_assets/svg/logo-dashboard.svg";
import { getBookCover } from "@/store/slices/chatSlice";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import FamilyTree from "../../_assets/svg/sidebar/family-tree.svg";
import styles from "./Sidebar.module.css";
import TransitionsDialog from "../modal/TransitionDialog";

const SideBar = ({ menuClick, handleSideCheck }) => {
  const [childsOpen, setChilsdOpen] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [buyPremium, setBuyPremium] = useState(false);
  const [coverNumber, setCoverNumber] = useState(null);
  const router = useRouter();
  const dispatch: any = useDispatch();
  const { t } = useTranslation();
  const currentRoute = router.pathname;
  const childsOpenCheck = () => {
    if (
      currentRoute === "/dashboard/chapters" ||
      currentRoute === "/dashboard/chapters/chapterName" ||
      currentRoute === "/events"
    ) {
      setChilsdOpen(true);
    } else if (currentRoute === "/dashboard/chapters/completedChapter") {
      setChilsdOpen(true);
    }
  };

  useEffect(() => {
    childsOpenCheck();
  }, []);

  useEffect(() => {
    const jwt = require("jsonwebtoken");
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt.decode(token);
      const accessRole = decodedToken?.accessRole;
      console.log("111acccrole", accessRole);
      if (accessRole === "PremiumPlan" || accessRole === "GoldPlan") {
        setIsPremium(true);
      } else {
        setIsPremium(false);
      }
    }
  }, []);

  return (
    <>
      <Box sx={{ color: "#30422E" }}>
        {!handleSideCheck && (
          <Box sx={{ display: "flex", alignItems: "center", padding: "0 0 0 20px", height: "70px", bgcolor: "#30422E" }}>
            <Image src={Logo} alt="logo" className={styles.logo} />
          </Box>
        )}
        {handleSideCheck && (
          <Box
            sx={{
              height: "48px",
              display: "flex",
              alignItems: "center",
              ml: "8px",
            }}
            onClick={menuClick}
          >
            <Image src={handleSideCheck ? MenuIconGreen : MenuIcon} alt="MenuIcon" />
          </Box>
        )}
        <Box
          sx={{
            padding: "35px 29px 0 11px",
          }}
        >
          <Box>
            <a
              className={`${styles.link} ${currentRoute === "/dashboard/overview" ||
                currentRoute === "/dashboard/BookView"
                ? styles.active
                : ""
                }`}
              onClick={() => {
                router.push("/dashboard/overview");
              }}
            >
              <Image
                alt="icon"
                className={styles.sidebarIcon}
                src={
                  currentRoute === "/dashboard/overview" ||
                    currentRoute === "/dashboard/BookView"
                    ? OverViewWhite
                    : OverViewGreen
                }
              />
              {t("sideBar.Overview")}
            </a>
          </Box>
          <Box>
            <a
              className={`${styles.link} ${currentRoute === "/dashboard/chapters" ||
                currentRoute === "/dashboard/chapters/chapterName" ||
                currentRoute === "/events"
                ? styles.active
                : currentRoute === "/dashboard/chapters/completedChapter" &&
                styles.active
                }`}
              onClick={() => {
                setChilsdOpen(!childsOpen);
              }}
            >
              <Image
                alt="icon"
                className={styles.sidebarIcon}
                src={
                  currentRoute === "/dashboard/chapters" ||
                    currentRoute === "/dashboard/chapters/completedChapter" ||
                    currentRoute === "/dashboard/chapters/chapterName" ||
                    currentRoute === "/events"
                    ? HomeWhite
                    : HomeGreen
                }
              />
              {t("sideBar.AllCh")}
              {childsOpen ? (
                <KeyboardArrowUpIcon
                  sx={{
                    width: { xs: "15px", md: "24px" },
                    ml: "5px",
                  }}
                />
              ) : (
                <KeyboardArrowDownIcon
                  sx={{
                    width: { xs: "15px", md: "24px" },
                    ml: "5px",
                  }}
                />
              )}
            </a>
            {childsOpen && (
              <Box>
                <Box sx={{ marginLeft: "20px" }}>
                  <a
                    className={`${styles.link} ${currentRoute === "/dashboard/chapters" ||
                      currentRoute === "/dashboard/chapters/chapterName" ||
                      currentRoute === "/events"
                      ? styles.active
                      : ""
                      }`}
                    onClick={() => {
                      router.push("/dashboard/chapters");
                    }}
                  >
                    {/* Add your icon and text for the first new option */}
                    <Image
                      alt="icon"
                      className={styles.sidebarIcon}
                      src={
                        currentRoute === "/dashboard/chapters" ||
                          currentRoute === "/dashboard/chapters/chapterName" ||
                          currentRoute === "/events"
                          ? ProgressWhite
                          : ProgressGreen
                      }
                    />
                    {t("sideBar.InPro")}
                  </a>
                </Box>
                <Box sx={{ marginLeft: "20px" }}>
                  <a
                    className={`${styles.link} ${currentRoute === "/dashboard/chapters/completedChapter" &&
                      styles.active
                      }`}
                    onClick={() => {
                      router.push("/dashboard/chapters/completedChapter");
                    }}
                  >
                    <Image
                      alt="icon"
                      className={styles.sidebarIcon}
                      src={
                        currentRoute === "/dashboard/chapters/completedChapter"
                          ? CompletedWhite
                          : CompletedGreen
                      }
                    />
                    {t("sideBar.Com")}
                  </a>
                </Box>
              </Box>
            )}
          </Box>
          <Box>
            <a
              className={`${styles.link} ${currentRoute === "/dashboard/TableOfContent" && styles.active
                }`}
              onClick={() => router.push("/dashboard/TableOfContent")}
            >
              <Image
                alt="icon"
                src={
                  currentRoute === "/dashboard/TableOfContent"
                    ? FaqWhite
                    : FaqGreen
                }
              />
              {t("sideBar.toc")}
            </a>
          </Box>
          <Box>
            <a
              className={`${styles.link} ${currentRoute === "/familyTree" && styles.active
                }`}
              onClick={() => {
                if (isPremium) {
                  router.push("/familyTree");
                } else {
                  setBuyPremium(true);
                }
              }}
            >
              <Image
                alt="icon"
                src={FamilyTree}
              />
              {t("sideBar.FamilyTree")}
            </a>
          </Box>

          <Box>
            <a
              className={`${styles.link} ${currentRoute === "/dashboard/BookCover/SelectBookCover"
                ? styles.active
                : currentRoute === "/dashboard/BookCover/ViewBookCover"
                  ? styles.active
                  : currentRoute === "/dashboard/BookCover/EditBookCover" &&
                  styles.active
                }`}
              onClick={() => {
                dispatch(getBookCover())
                  .unwrap()
                  .then((res) => {
                    setCoverNumber(res.coverNumber);
                    if (res.coverNumber) {
                      router.push(
                        `/dashboard/BookCover/ViewBookCover?CoverNumber=${res.coverNumber}`
                      );
                    } else {
                      router.push("/dashboard/BookCover/SelectBookCover");
                    }
                  })
                  .catch(() =>
                    router.push("/dashboard/BookCover/SelectBookCover")
                  );
              }}
            >
              <Image
                alt="icon"
                className={styles.sidebarIcon}
                src={
                  currentRoute === "/dashboard/BookCover/SelectBookCover" ||
                    currentRoute === "/dashboard/BookCover/EditBookCover" ||
                    currentRoute === "/dashboard/BookCover/ViewBookCover"
                    ? BookCoverWhite
                    : BookCoverGreen
                }
              />
              {t("sideBar.bookCover")}
            </a>
          </Box>
          <Box>
            <a
              className={`${styles.link} ${currentRoute === "/dashboard/SubscribePlans"
                ? styles.active
                : currentRoute ===
                "/dashboard/SubscribePlans/SubscriptionPayment" &&
                styles.active
                }`}
              onClick={() => router.push("/dashboard/SubscribePlans")}
            >
              <Image
                alt="icon"
                className={styles.sidebarIcon}
                src={
                  currentRoute === "/dashboard/SubscribePlans" ||
                    currentRoute ===
                    "/dashboard/SubscribePlans/SubscriptionPayment"
                    ? SubsWhite
                    : Subs
                }
              />
              {t("sideBar.SubPlan")}
            </a>
          </Box>
          <Box>
            <a
              className={`${styles.link} ${currentRoute === "/dashboard/profileSetting" && styles.active
                }`}
              onClick={() => router.push("/dashboard/profileSetting")}
            >
              <Image
                alt="icon"
                src={
                  currentRoute === "/dashboard/profileSetting"
                    ? AccountWhite
                    : AccountGreen
                }
                className={styles.sidebarIcon}
              />
              {t("sideBar.account")}
            </a>
          </Box>
          <Box>
            <a
              className={`${styles.link} ${currentRoute === "/dashboard/Support" && styles.active
                }`}
              onClick={() => router.push("/dashboard/Support")}
            >
              <Image
                alt="icon"
                src={
                  currentRoute === "/dashboard/Support"
                    ? SuportWhite
                    : SuportGreen
                }
                className={styles.sidebarIcon}
              />
              {t("sideBar.Support")}
            </a>
          </Box>
        </Box>
      </Box>
      <TransitionsDialog
        open={buyPremium}
        heading={`${t("richText.ByPreHeading")}`}
        description="Family Tree is only available for Standard and Premium users. Want to buy now?"
        cancel={() => {
          setBuyPremium(false);
        }}
        closeModal={() => {
          setBuyPremium(false);
        }}
        proceed={() => {
          setBuyPremium(false);
          router.push("/dashboard/SubscribePlans");
        }}
      />
    </>
  );
};

export default SideBar;
