'use client'

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from './NavBar.module.css'
import Button from "../button/Button";
import NextIcon from '@/__webAssets/svgs/next.svg'
import Link from "next/link";
import { usePathname } from 'next/navigation'

const NavBar = ({ color, logo }) => {

  const pathname = usePathname();

  console.log(pathname, "   path");

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
        <Link href="/features">
          <Typography sx={{ padding: ' 0 20px 10px' }}
            className={`link ${pathname === '/features' ? styles.underLine : ''}`}
          >Features</Typography>
        </Link>
        <Link href="/blog">
          <Typography sx={{ padding: ' 0 20px 10px' }}
            className={`link ${pathname === '/blog' || pathname === '/blog/blogDetails' ? styles.underLine : ''}`}

          >Blog</Typography>
        </Link>
        <Link href="/aboutUs">
          <Typography sx={{ padding: ' 0 20px 10px' }}
            className={`link ${pathname === '/aboutUs' ? styles.underLine : ''}`}

          >About Us</Typography>
        </Link>
        <Link href="/pricing">
          <Typography sx={{ padding: ' 0 20px 10px' }}
            className={`link ${pathname === '/pricing' ? styles.underLine : ''}`}

          >Pricing</Typography>
        </Link>
        <Link href="/faqs">
          <Typography sx={{ padding: ' 0 20px 10px' }}
            className={`link ${pathname === '/faqs' ? styles.underLine : ''}`}

          >FAQ &apos; s</Typography>
        </Link>

        <Box sx={{ paddingBottom: '10px' }}>
          <a href="https://www.thelifescript.com/">
            <Button
              title='Sign Up'
              width='140px'
              height='45px'
              img2={NextIcon}
            />
          </a>
        </Box>
      </Box>
    </Box>
  )
}

export default NavBar;