import CompletedGreen from "@/_assets/svg/sidebar/completed-green.svg";
import CompletedWhite from "@/_assets/svg/sidebar/completed-white.svg";
import FaqWhite from "@/_assets/svg/sidebar/faq-white.svg";
import FaqGreen from "@/_assets/svg/sidebar/faq-green.svg";
import HomeWhite from "@/_assets/svg/sidebar/home-white.svg";
import HomeGreen from "@/_assets/svg/sidebar/home-green.svg";
import OverViewGreen from "@/_assets/svg/sidebar/overView-green.svg";
import OverViewWhite from "@/_assets/svg/sidebar/overView-white.svg";
import ProgressGreen from "@/_assets/svg/sidebar/in-progress-green.svg";
import ProgressWhite from "@/_assets/svg/sidebar/in-progress-white.svg";
import SuportGreen from "@/_assets/svg/sidebar/support-green.svg";
import SuportWhite from "@/_assets/svg/sidebar/support-white.svg";
import AccountGreen from "@/_assets/svg/sidebar/account-green.svg";
import AccountWhite from "@/_assets/svg/sidebar/account-white.svg";
import BookCoverGreen from "@/_assets/svg/sidebar/book-cover-green.svg";
import BookCoverWhite from "@/_assets/svg/sidebar/book-cover-white.svg";
import TreeGreen from "@/_assets/svg/sidebar/tree-green.svg";
import TreeWhite from "@/_assets/svg/sidebar/tree-white.svg";
import ViewBookGreen from "@/_assets/svg/sidebar/view-book-green.svg";
import ViewBookWhite from "@/_assets/svg/sidebar/view-book-white.svg";
import Logo from "@/_assets/svg/white-logo.svg";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Sidebar.module.css";

const SideBar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  console.log(currentRoute, "   faheem,m");


  return (
    <Box sx={{ color: "#fff" }}>
      <Box sx={{ padding: "13px 20px", height: "70px" }}>
        <Image src={Logo} alt="logo" className={styles.logo} />
      </Box>
      <Box
        sx={{
          padding: "35px 29px 0 11px",
          borderTop: "1px solid #fff",
        }}
      >
        <a
          className={`${styles.link} ${currentRoute === "/dashboard/overview" && styles.active}`}
          onClick={() => router.push("/dashboard/overview")}
        >
          <Image alt="icon" src={currentRoute === "/dashboard/overview" ? OverViewGreen : OverViewWhite} />
          Overview
        </a>
        <a
          className={`${styles.link} ${currentRoute === "/dashboard/chapters" && styles.active}`}
          onClick={() => router.push("/dashboard/chapters")}
        >
          <Image alt="icon" src={currentRoute === "/dashboard/chapters" ? HomeGreen : HomeWhite} />
          All Chapters
        </a>
        <a className={styles.link}>
          <Image alt="icon" src={CompletedWhite} />
          Completed
        </a>
        <a className={styles.link}>
          <Image alt="icon" src={ProgressWhite} />
          In Progress
        </a>
        <a className={styles.link}>
          <Image alt="icon" src={BookCoverWhite} />
          Book Cover
        </a>
        <a className={styles.link}>
          <Image alt="icon" src={FaqWhite} />
          Table of contents
        </a>
        <a className={styles.link}>
          <Image alt="icon" src={AccountWhite} />
          Account
        </a>
        <a className={styles.link}>
          <Image alt="icon" src={SuportWhite} />
          Support
        </a>
        <a className={styles.link}>
          <Image alt="icon" src={TreeWhite} />
          Gift a Book
        </a>
      </Box>
    </Box>
  );
};

export default SideBar;
