'use client'

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from './NavBar.module.css'
import Button from "../button/Button";
import NextIcon from '@/__webAssets/svgs/next.svg'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import LanguageOption from "./Language"

import Menu from "@/__webAssets/svgs/mobile-menu.svg"
import MenuW from "@/__webAssets/svgs/mobile-menu-white.svg"

const NavBar = ({ color, logo }) => {
  const [mobileState, setMobileState] = useState(false)
  const router = useRouter();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const userLoggedInStorage = localStorage.getItem("token");
    setUserLoggedIn(!!userLoggedInStorage && userLoggedInStorage !== "undefined");
  }, []);

  const handleButtonClick = () => {
    if (userLoggedIn) {
      router.push("/dashboard/chapters");
    } else {
      router.push("/_auth/Auth");
    }
  };

  function handleMenu() {
    setMobileState(pre => !pre)
  }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: { lg: '64px 90px 0', md: "50px 50px 0 ", sm: "40px 50px 0", xs: "30px 16px 0" },
      position: "relative",
      bgcolor: { md: "none", sm: mobileState && "#F3ECDA", xs: mobileState && "#F3ECDA" },
      zIndex: "10"
    }}>
      {!mobileState && <Image src={logo} alt="Logo" className={styles.logo} />}

      <Image src={pathname === '/' ? Menu : MenuW && (mobileState ? Menu : MenuW)} alt="icon" onClick={handleMenu} className={styles.menu} />

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: { md: "row", sm: "column", xs: "column" },
      }}
        color={mobileState ? "" : color}
        className={`${mobileState ? `${styles.menuItems} ${styles.show}` : styles.hide}`}
      >
        <Link href="/">
          <Typography sx={{
            padding: { lg: ' 0 20px 10px', md: "0px 12px 10px", sm: "0 10px 20px", xs: "0 0 20px" },
            fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "18px" },
            fontWeight: 500,
            fontFamily: "Avenir"
          }}
            className={`${pathname === '/' ? styles.underLine : ''}`}
          >Home</Typography>
        </Link>

        <Link href="/features">
          <Typography sx={{
            padding: { lg: ' 0 20px 10px', md: "0px 12px 10px", sm: "0 10px 20px", xs: "0 0 20px" },
            fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "18px" },
            fontWeight: 500,
            fontFamily: "Avenir"
          }}
            className={`${pathname === '/features' ? styles.underLine : ''}`}
          >Features</Typography>
        </Link>

        <Link href="/blog">
          <Typography sx={{
            padding: { lg: ' 0 20px 10px', md: "0px 12px 10px", sm: "0 10px 20px", xs: "0 0 20px" },
            fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "18px" },
            fontWeight: 500,
            fontFamily: "Avenir",
          }}
            className={`${pathname === '/blog' || pathname === '/blog/blogDetails' ? styles.underLine : ''}`}
          >Blog</Typography>
        </Link>

        <Link href="/aboutUs">
          <Typography sx={{
            padding: { lg: ' 0 20px 10px', md: "0px 12px 10px", sm: "0 10px 20px", xs: "0 0 20px" },
            fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "18px" },
            fontWeight: 500,
            fontFamily: "Avenir"
          }}
            className={`${pathname === '/aboutUs' ? styles.underLine : ''}`}
          >About Us</Typography>
        </Link>

        <Link href="/pricing">
          <Typography sx={{
            padding: { lg: ' 0 20px 10px', md: "0px 12px 10px", sm: "0 10px 20px", xs: "0 0 20px" },
            fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "18px" },
            fontWeight: 500,
            fontFamily: "Avenir"
          }}
            className={`${pathname === '/pricing' ? styles.underLine : ''}`}
          >Pricing</Typography>
        </Link>

        <Link href="/faqs">
          <Typography sx={{
            padding: { lg: ' 0 20px 10px', md: "0px 12px 10px", sm: "0 10px 20px", xs: "0 0 20px" },
            fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "18px" },
            fontWeight: 500,
            fontFamily: "Avenir",
          }}
            className={`${pathname === '/faqs' ? styles.underLine : ''}`}
          >FAQ&apos;s</Typography>
        </Link>

        <Box sx={{ paddingBottom: '10px', display: "flex", columnGap: "10px" }}>
          <Link href="/_auth/Auth">
            <Button
              title='Sign Up'
              width='140px'
              height='45px'
              img2={NextIcon}
              onClick={handleButtonClick}
            />
          </Link>
          {/* <Box sx={{ display: { md: "inline-block", sm: "none" } }}>
            <LanguageOption />
          </Box> */}
        </Box>
      </Box>

    </Box>
  )
}

export default NavBar;