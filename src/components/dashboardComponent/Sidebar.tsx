import Completed from "@/_assets/svg/completed.svg";
import Faq from "@/_assets/svg/faq.svg";
import Home from "@/_assets/svg/home.svg";
import OverView from "@/_assets/svg/overView.svg";
import Recent from "@/_assets/svg/recent.svg";
import Suport from "@/_assets/svg/support.svg";
import Account from "@/_assets/svg/account.svg";
import BookCover from "@/_assets/svg/book-cover.svg";
import {
  default as Tree,
  default as ViewBook,
} from "@/_assets/svg/view-book.svg";
import Logo from "@/_assets/svg/white-logo.svg";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Sidebar.module.css";

const SideBar = () => {
  const router = useRouter();
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
        <a className={styles.link}>
          <Image alt="icon" src={OverView} />
          Overview
        </a>
        <a
          className={`${styles.link} ${styles.active}`}
          onClick={() => router.push("/dashboard/chapters")}
          style={{ cursor: "pointer" }}
        >
          <Image alt="icon" src={Home} />
          All Chapters
        </a>
        <a className={styles.link}>
          <Image alt="icon" src={Completed} />
          Completed
        </a>
        <a className={styles.link}>
          <Image alt="icon" src={Recent} />
          In Progress
        </a>
        <a className={styles.link}>
          <Image alt="icon" src={BookCover} />
          Book Cover
        </a>
        <a className={styles.link}>
          <Image alt="icon" src={Faq} />
          Table of contents
        </a>
        <a className={styles.link}>
          <Image alt="icon" src={Account} />
          Account
        </a>
        <a className={styles.link}>
          <Image alt="icon" src={Suport} />
          Support
        </a>
        <a className={styles.link}>
          <Image alt="icon" src={Tree} />
          Gift a Book
        </a>
      </Box>
    </Box>
  );
};

export default SideBar;
