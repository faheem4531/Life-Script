import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Provider as StoreProvider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "regenerator-runtime/runtime";
import "../styles/globals.css";
import NewApp from "./_newApp";

import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { store } from "../store/store";
import i18n from "i18next";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = usePathname();
  const [loading, setLoading] = useState(true);
  // verify auth
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.href.includes("es")) {
      localStorage.setItem("language", "Spanish");
    }
    else{
      localStorage.setItem("language", "English");
    }

    const languageStored = localStorage.getItem("language");
    const language = languageStored === "Spanish" ? "sp" : "en";
    // console.log(language, "language");
    i18n.changeLanguage(language);



    const userLoggedIn = localStorage.getItem("token");

    const publicRoutes = [
      "/pricing",
      "/verify/verificationSent",
      "/verify",
      "/verify/forgetPassword",
      "/change-password",
      "/home",
      "/blog",
      "blog/*",
      "/blog/blog-details",
      "/about-us",
      "/gifting",
      "/features",
      "/faqs",
      "/login",
      "/terms-of-use",
      "/privacy-policy",
      "/purchase",
      "/purchase/subscription",
      "/purchase/gift",
      "/purchase/free-trial",
      "/purchase/sso-redirecting",
      "/login/fb-redirecting",
    ];
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id");
    const slug = queryParams.get("slug");
    if (window.location.search.includes("?via=install")) {
      setLoading(false);
      return;
    }
    if (currentPath && currentPath.startsWith("/verify")) {
      const token = queryParams.get("token");
      if (token) {
        setLoading(false);
        return;
      }
    }
    if (!currentPath) return;
    setLoading(false);
    // If the user is logged in and tries to access /blog or any subpath of it, redirect to /dashboard/chapters
    if (
      userLoggedIn &&
      (currentPath === "/blog" || currentPath.startsWith("/blog/"))
    ) {
      router.push("/dashboard/chapters");
      setLoading(false);
    } else if (!userLoggedIn) {
      // Redirect to the current path, passing id if available
      setLoading(false);
      if (currentPath) {
        id ? router.push(`${currentPath}?id=${id}`) : router.push(currentPath);
      }
    } else if (userLoggedIn && currentPath === "/") {
      // Redirect the logged-in user from home page to dashboard/chapters
      router.push("/dashboard/chapters");
      setLoading(false);
    } else if (!userLoggedIn) {
      // If the user is not logged in and tries to access any path, redirect to home page
      router.push("/");
      setLoading(false);
    } else {
      setLoading(false);
    }

  }, [currentPath]);

  const [showCookieBar, setShowCookieBar] = useState(true);

  useEffect(() => {
    let testCookieName = "test";
    Cookies.remove(testCookieName);

    Cookies.set(testCookieName, 500);
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  return (
    <StoreProvider store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container justifyContent="center">
          {showCookieBar && (
            <CookieConsent
              enableDeclineButton
              declineButtonText="Decline"
              buttonText="Accept"
              flipButtons
              onDecline={() => { }}
              setDeclineCookie={false}
              style={{
                background: "#F5F5F5",
                color: "#2D3C27",
                fontSize: isMobile ? "10px" : isTablet ? "16px" : "18px",
                padding: "1px",
                display: "inline-block",
                width: isMobile ? "100%" : isTablet ? "50%" : "400px",
                borderRadius: "0px 5px 0px 0px ",
                textAlign: "center",
              }}
              buttonStyle={{
                background: "#ff5722",
                color: "#fff",
                fontSize: "14px",
                padding: "10px 20px",
                cursor: "pointer",
                textAlign: "center",
                width: isMobile ? "130px" : isTablet ? "140px" : "150px",
                marginRight:"-10px"
              }}
              declineButtonStyle={{
                background: "#777",
                color: "#fff",
                fontSize: "14px",
                padding: "10px 20px",
                cursor: "pointer",
                width: isMobile ? "130px" : isTablet ? "140px" : "150px",
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2px',
                  width: { sm: "90%", xs: "100%" },
                  justifyContent: 'center',
                  alignItems: "center"
                }}
              >
                <Typography
                  variant={isMobile ? "body2" : isTablet ? "body1" : "h6"}
                  sx={{
                    marginBottom: "15px",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  We value your privacy
                </Typography>
                <Typography
                  variant={isMobile ? "body2" : isTablet ? "body1" : "body1"}
                  textAlign={"center"}
                >
                  This website uses cookies to ensure you get the best possible
                  experience. By clicking &apos;Accept&apos;, you agree to our
                  use of cookies.
                </Typography>
              </Box>
            </CookieConsent>
          )}
        </Grid>

        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "100vw",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <SessionProvider session={pageProps?.session}>
            <NewApp>
              <Component {...pageProps} />
              <Script
                src="https://r.wdfl.co/rw.js"
                data-rewardful="797851"
              ></Script>
              <Script id="rewardful-queue" strategy="beforeInteractive">
                {`(function(w,r){w._rwq=r;w[r]=w[r]||function(){(w[r].q=w[r].q||[]).push(arguments)}})(window,'rewardful');`}
              </Script>
            </NewApp>
          </SessionProvider>
        )}
      </LocalizationProvider>
    </StoreProvider>
  );
}