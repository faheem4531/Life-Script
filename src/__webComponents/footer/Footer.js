import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

import styles from "../ComponentsStyles.module.css";
import Logo from "@/__webAssets/svgs/lifescript-life-story-book-logo.svg";
import { useFooterLinks, useFooterSocialIcons } from "@/utils/webContent";


const Footer = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  const router = useRouter();
  const footerLinks = useFooterLinks(t);

  const handleContactClick = (e) => {
    e.preventDefault();
    router.push("/about-us#ContactUs");
  };

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
            {useFooterSocialIcons.map((item, index) => (
              <SocialLogos
                key={index}
                href={item.href}
                icon={item.icon}
                alt={item.alt}
              />
            ))}
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

const SocialLogos = ({ href, icon, alt }) => {
  const logo = {
    width: "25px",
    height: "auto",
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image src={icon} alt={alt} style={logo} />
    </a>
  );
};
