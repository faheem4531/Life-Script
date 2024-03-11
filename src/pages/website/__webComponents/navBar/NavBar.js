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

import Menu from "@/__webAssets/svgs/mobile-menu.svg"

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
      padding: { lg: '64px 106px 0', md: "50px 60px 0 ", sm: "40px 50px 0", xs: "30px 16px 0" },
      position: "relative", bgcolor: ""
    }}>
      {!mobileState && <Image src={logo} alt="Logo" className={styles.logo} />}

      <Image src={Menu} alt="icon" onClick={handleMenu} className={styles.menu} />

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: { md: "row", sm: "column", xs: "column" },
        fontSize: '18px',
        fontWeight: 500,
      }}
        color={color}
        className={`${mobileState ? `${styles.menuItems} ${styles.show}` : styles.hide}`}
      >
        <Link href="/">
          <Typography sx={{ padding: { lg: ' 0 20px 10px', md: "0px 12px 10px", sm: "0 10px 20px", xs: "0 0 20px" }, fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "18px" } }}
            className={`link ${pathname === '/' ? styles.underLine : ''}`}
          >Home</Typography>
        </Link>
        <Link href="/website/features">
          <Typography sx={{ padding: { lg: ' 0 20px 10px', md: "0px 12px 10px", sm: "0 10px 20px", xs: "0 0 20px" }, fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "18px" } }}
            className={`link ${pathname === '/website/features' ? styles.underLine : ''}`}
          >Features</Typography>
        </Link>
        <Link href="/website/blog">
          <Typography sx={{ padding: { lg: ' 0 20px 10px', md: "0px 12px 10px", sm: "0 10px 20px", xs: "0 0 20px" }, fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "18px" } }}
            className={`link ${pathname === '/website/blog' || pathname === '/blog/blogDetails' ? styles.underLine : ''}`}

          >Blog</Typography>
        </Link>
        <Link href="/website/aboutUs">
          <Typography sx={{ padding: { lg: ' 0 20px 10px', md: "0px 12px 10px", sm: "0 10px 20px", xs: "0 0 20px" }, fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "18px" } }}
            className={`link ${pathname === '/website/aboutUs' ? styles.underLine : ''}`}

          >About Us</Typography>
        </Link>
        <Link href="/website/pricing">
          <Typography sx={{ padding: { lg: ' 0 20px 10px', md: "0px 12px 10px", sm: "0 10px 20px", xs: "0 0 20px" }, fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "18px" } }}
            className={`link ${pathname === '/website/pricing' ? styles.underLine : ''}`}

          >Pricing</Typography>
        </Link>
        <Link href="/website/faqs">
          <Typography sx={{ padding: { lg: ' 0 20px 10px', md: "0px 12px 10px", sm: "0 10px 20px", xs: "0 0 20px" }, fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "18px" } }}
            className={`link ${pathname === '/website/faqs' ? styles.underLine : ''}`}

          >FAQ &apos; s</Typography>
        </Link>

        <Box sx={{ paddingBottom: '10px' }}>
          <Link href="/_auth/Auth">
            <Button
              title='Sign Up'
              width='140px'
              height='45px'
              img2={NextIcon}
              onClick={handleButtonClick}
            />
          </Link>
        </Box>
      </Box>

    </Box>
  )
}

export default NavBar;