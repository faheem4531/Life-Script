import BookCoverGreen from "@/_assets/svg/sidebar/book-cover-green.svg";
import AccountGreen from "@/_assets/svg/sidebar/account-green.svg";
import AccountWhite from "@/_assets/svg/sidebar/account-white.svg";
import BookCoverWhite from "@/_assets/svg/sidebar/book-cover-white.svg";
import CompletedGreen from "@/_assets/svg/sidebar/completed-green.svg";
import CompletedWhite from "@/_assets/svg/sidebar/completed-white.svg";
import FaqGreen from "@/_assets/svg/TableOfContentIcon.svg";
import FaqWhite from "@/_assets/svg/TableOfContentIcon.svg";
import HomeGreen from "@/_assets/svg/sidebar/home-green.svg";
import HomeWhite from "@/_assets/svg/sidebar/home-white.svg";
import ProgressGreen from "@/_assets/svg/sidebar/in-progress-green.svg";
import ProgressWhite from "@/_assets/svg/sidebar/in-progress-white.svg";
import MenuIcon from "@/_assets/svg/sidebar/menuIcon.svg";
import MenuIconGreen from "@/_assets/svg/sidebar/menu-green.svg";
import OverViewGreen from "@/_assets/svg/sidebar/overView-green.svg";
import OverViewWhite from "@/_assets/svg/sidebar/overView-white.svg";
import EmailGreen from "@/_assets/svg/sidebar/email-green.svg";
import EmailWhite from "@/_assets/svg/sidebar/email-white.svg";
import SuportWhite from "@/_assets/svg/sidebar/support-white.svg";
import SuportGreen from "@/_assets/svg/sidebar/support-green.svg";
import TutorialGreen from "@/_assets/svg/sidebar/tutorial-green.svg";
import TutorialWhite from "@/_assets/svg/sidebar/tutorial-white.svg";
import GiftWhite from "@/_assets/svg/sidebar/gift-white.svg";
import GiftGreen from "@/_assets/svg/sidebar/gift-green.svg";
import ContactGreen from "@/_assets/svg/sidebar/contact-support-green.svg";
import ContactWhite from "@/_assets/svg/sidebar/contact-support-white.svg";
import FamilyTree from "../../_assets/svg/sidebar/family-tree.svg";
import FamilyTreeWhite from "../../_assets/svg/sidebar/family-tree-white.svg";

import SubsWhite from "@/_assets/svg/subWhite.svg";
import Subs from "@/_assets/svg/subs.svg";
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
import styles from "./Sidebar.module.css";
import TransitionsDialog from "../modal/TransitionDialog";

const SideBar = ({ menuClick, handleSideCheck }) => {
  const [childsOpen, setChilsdOpen] = useState(false);
  const [supportChildsOpen, setSupportChilsdOpen] = useState(false);
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

  const supportChildsOpenCheck = () => {
    if (
      currentRoute === "/dashboard/Support" ||
      currentRoute === "/dashboard/Support/Gift" ||
      currentRoute === "/dashboard/Support/Tutorials"
    ) {
      setSupportChilsdOpen(true);
    } else if (
      currentRoute === "/dashboard/Support/ReferAFriend" ||
      currentRoute === "/dashboard/Support/TutorialsDetail"
    ) {
      setSupportChilsdOpen(true);
    }
  };

  useEffect(() => {
    childsOpenCheck();
    supportChildsOpenCheck();
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
          <Box
            sx={{
              display: "flex",
              position: "fixed",
              width: "220px",
              zIndex: "10",
              alignItems: "center",
              padding: "0 0 0 20px",
              height: "70px",
              bgcolor: "#30422E",
            }}
          >
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
            <Image
              src={handleSideCheck ? MenuIconGreen : MenuIcon}
              alt="MenuIcon"
            />
          </Box>
        )}
        <Box
          sx={{
            padding: {
              lg: "105px 29px 0 11px",
              sm: "30px 29px 0 11px",
              xs: "20px 29px 0 11px",
            },
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
                className={styles.sidebarIcon}
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
                src={
                  currentRoute === "/familyTree" ? FamilyTreeWhite : FamilyTree
                }
                className={styles.sidebarIcon}
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
              className={`${styles.link} ${currentRoute === "/dashboard/Support/Gift" ||
                currentRoute === "/dashboard/Support/ReferAFriend"
                ? styles.active
                : ""
                }`}
              onClick={() => {
                router.push("/dashboard/Support/Gift");
              }}
            >
              {/* Add your icon and text for the first new option */}
              <Image
                alt="icon"
                className={styles.sidebarIcon}
                src={
                  currentRoute === "/dashboard/Support/Gift" ||
                    currentRoute === "/dashboard/Support/ReferAFriend"
                    ? GiftWhite
                    : GiftGreen
                }
              />
              {t("sideBar.giftaBook")}
            </a>
          </Box>

          <Box
            sx={{
              borderTop: "1px solid rgba(48, 66, 46, 0.30)",
              mt: "-15px ",
              p: "15px 0 0",
            }}
          >
            <a
              className={`${styles.link} ${currentRoute === "/dashboard/Support"
                ? styles.active
                : currentRoute === "/dashboard/Support/Tutorials" &&
                styles.active
                }`}
              onClick={() => {
                setSupportChilsdOpen(!supportChildsOpen);
              }}
            >
              <Image
                alt="icon"
                className={styles.sidebarIcon}
                src={
                  currentRoute === "/dashboard/Support" ||
                    currentRoute === "/dashboard/Support/Tutorials"
                    ? SuportWhite
                    : SuportGreen
                }
              />
              {t("sideBar.Support")}
              {supportChildsOpen ? (
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
            {supportChildsOpen && (
              <Box>
                <Box sx={{ marginLeft: "20px" }}>
                  <a
                    className={`${styles.link} ${currentRoute === "/dashboard/Support/Tutorials" ||
                      currentRoute === "/dashboard/Support/TutorialsDetail"
                      ? styles.active
                      : ""
                      }`}
                    onClick={() => {
                      router.push("/dashboard/Support/Tutorials");
                    }}
                  >
                    {/* Add your icon and text for the first new option */}
                    <Image
                      alt="icon"
                      className={styles.sidebarIcon}
                      src={
                        currentRoute === "/dashboard/Support/Tutorials" ||
                          currentRoute === "/dashboard/Support/TutorialsDetail"
                          ? TutorialWhite
                          : TutorialGreen
                      }
                    />
                    Tutorials and Tips
                  </a>
                </Box>
                <Box sx={{ marginLeft: "20px" }}>
                  <a
                    className={`${styles.link} ${currentRoute === "/dashboard/emailPreference" && styles.active
                      }`}
                    onClick={() => router.push("/dashboard/emailPreference")}
                  >
                    <Image
                      alt="icon"
                      src={
                        currentRoute === "/dashboard/emailPreference"
                          ? EmailWhite
                          : EmailGreen
                      }
                      className={styles.sidebarIcon}
                    />
                    Email Preferences
                  </a>
                </Box>
                <Box sx={{ marginLeft: "20px" }}>
                  <a
                    className={`${styles.link} ${currentRoute === "/dashboard/Support" && styles.active
                      }`}
                    onClick={() => {
                      router.push("/dashboard/Support");
                    }}
                  >
                    <Image
                      alt="icon"
                      className={styles.sidebarIcon}
                      src={
                        currentRoute === "/dashboard/Support"
                          ? ContactWhite
                          : ContactGreen
                      }
                    />
                    Contact Support
                  </a>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      <TransitionsDialog
        open={buyPremium}
        heading={`${t("richText.ByPreHeading")}`}
        description={t("richText.description")}
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
