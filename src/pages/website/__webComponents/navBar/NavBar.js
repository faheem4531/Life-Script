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

const NavBar = ({ color, logo }) => {
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

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '64px 106px 0',
    }}>
      <Image src={logo} alt="Logo" className={styles.logo} />
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '18px',
        fontWeight: 500,
      }}
        color={color}
      >
        <Link href="/">
          <Typography sx={{ padding: ' 0 20px 10px' }}
            className={`link ${pathname === '/' ? styles.underLine : ''}`}
          >Home</Typography>
        </Link>
        <Link href="/website/features">
          <Typography sx={{ padding: ' 0 20px 10px' }}
            className={`link ${pathname === '/website/features' ? styles.underLine : ''}`}
          >Features</Typography>
        </Link>
        <Link href="/website/blog">
          <Typography sx={{ padding: ' 0 20px 10px' }}
            className={`link ${pathname === '/website/blog' || pathname === '/blog/blogDetails' ? styles.underLine : ''}`}

          >Blog</Typography>
        </Link>
        <Link href="/website/aboutUs">
          <Typography sx={{ padding: ' 0 20px 10px' }}
            className={`link ${pathname === '/website/aboutUs' ? styles.underLine : ''}`}

          >About Us</Typography>
        </Link>
        <Link href="/website/pricing">
          <Typography sx={{ padding: ' 0 20px 10px' }}
            className={`link ${pathname === '/website/pricing' ? styles.underLine : ''}`}

          >Pricing</Typography>
        </Link>
        <Link href="/website/faqs">
          <Typography sx={{ padding: ' 0 20px 10px' }}
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