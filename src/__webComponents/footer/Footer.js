import Fb from "@/__webAssets/svgs/fb.svg";
import Insta from "@/__webAssets/svgs/insta.svg";
import Logo from "@/__webAssets/svgs/lifescript-life-story-book-logo.svg";
import Tiktok from "@/__webAssets/svgs/tiktok.svg";
import X from "@/__webAssets/svgs/x.svg";
import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../ComponentsStyles.module.css";

const Footer = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  const router = useRouter();
  const logo = {
    width: "25px",
    height: "auto",
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    router.push("/about-us#ContactUs");
  };

  const footerLinks = [
    {
      title: t("landingPage.footerSection.heading1.title"),
      links: [
        {
          path: "/about-us",
          text: t("landingPage.footerSection.heading1.text1"),
          mb: true,
        },
        {
          path: "/features",
          text: t("landingPage.footerSection.heading1.text2"),
          mb: true,
        },
        {
          path: "/pricing",
          text: t("landingPage.footerSection.heading1.text3"),
          mb: true,
        },
        {
          path: "/blog",
          text: t("landingPage.footerSection.heading1.text4"),
          mb: false,
        },
      ],
    },
    {
      title: t("landingPage.footerSection.heading2.title"),
      links: [
        {
          path: "/about-us#ContactUs",
          text: t("landingPage.footerSection.heading2.text1"),
          mb: true,
        },
        {
          path: "/faqs",
          text: t("landingPage.footerSection.heading2.text2"),
          mb: true,
        },
        {
          path: "/terms-of-use",
          text: t("landingPage.footerSection.heading2.text3"),
          mb: true,
        },
        {
          path: "/privacy-policy",
          text: t("landingPage.footerSection.heading2.text4"),
          mb: false,
        },
      ],
    },
    {
      title: "Comparisons",
      links: [
        {
          path: "/storyworth-alternative",
          text: "Storyworth alternative",
          mb: true,
        },
      ],
    },
    {
      title: "Discover Gift Ideas",
      links: [
        {
          path: "/retirement-gifts-for-men",
          text: "Retirement Gifts for Men",
          mb: true,
        },
        {
          path: "/christmas-gift-for-mom",
          text: "Christmas Gift for Mom",
          mb: true,
        },
        {
          path: "/retirement-gifts-for-women",
          text: "Retirement Gifts for Women",
          mb: true,
        },
        {
          path: "/thanksgiving-gift",
          text: "Thanksgiving Gift",
          mb: false,
        },
      ],
    },
  ];

  return (
    <Box ref={ref}>
      <Box
        sx={{
          padding: {
            lg: "44px 55px 40px 100px",
            md: "44px 30px 40px 70px",
            sm: "44px 20px 40px 40px",
            xs: "40px 20px",
          },
          bgcolor: "#30422E",
          color: "#F3ECDA",
          display: "flex",
          flexDirection: { lg: "row", sm: "column", xs: "column" },
          gap: { lg: "0", sm: "50px" },
          justifyContent: { lg: "space-between" },
        }}
      >
        <Box>
          <Image src={Logo} alt="logo" loading="lazy" />
          <Typography
            sx={{
              width: "210px",
              fontSize: "16px",
              margin: "23px 0",
            }}
          >
            {t("landingPage.footerSection.title")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              columnGap: "13px",
              alignItems: "center",
            }}
          >
            <a
              href="https://www.instagram.com/the.lifescript?igsh=ZWcyY3I1c2pmMzIw&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Insta} alt="Instagram" style={logo} />
            </a>
            <a
              href="https://www.tiktok.com/@the.lifescript?_t=8lYbtVKetST&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Tiktok} alt="logo" style={logo} loading="lazy" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61554559332668"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Fb} alt="logo" style={logo} loading="lazy" />
            </a>
            <a
              href="https://twitter.com/thelifescript"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={X} alt="logo" style={logo} loading="lazy" />
            </a>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { sm: "row", xs: "column" },
            columnGap: { sm: "45px" },
          }}
        >
          {footerLinks.map((item, index) => (
            <FooterColumn key={index} title={item.title} links={item.links} />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          padding: "12px 0",
          fontSize: { xs: "12px", sx: "14px" },
          fontFamily: "Avenir",
        }}
      >
        {t("landingPage.footerSection.copyrightText")}
      </Box>
    </Box>
  );
});

Footer.displayName = "Footer";
export default Footer;

const FooterColumn = ({ title, links }) => {
  return (
    <Box sx={{}}>
      <Typography
        sx={{
          fontWeight: 800,
          marginBottom: "19px",
          fontFamily: "Avenir8 !important",
          mt: { sm: "0", xs: "30px" },
          fontSize: { lg: "16px", sm: "20px", xs: "20px" },
        }}
      >
        {title}
      </Typography>
      {links.map((item, index) => (
        <Link key={index} href={item.path}>
          <Typography
            sx={{
              fontSize: "16px",
              marginBottom: item.mb
                ? { lg: "19px", sm: "15px", xs: "15px" }
                : "0",
            }}
            className={styles.hoverLinks}
          >
            {item.text}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};
