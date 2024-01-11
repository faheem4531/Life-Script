import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import type { AppProps } from "next/app";
import { Provider as StoreProvider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "regenerator-runtime/runtime";
import "../styles/globals.css";
import NewApp from "./_newApp";

import { Box, CircularProgress } from "@mui/material";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { store } from "../store/store";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = usePathname();
  const [loading, setLoading] = useState(true);
  //verify auth
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("token");
    if (
      !userLoggedIn &&
      userLoggedIn !== "undefined" &&
      currentPath !== "/verify/verificationSent" &&
      currentPath !== "/verify" &&
      currentPath !== "/verify/forgetPassword"
    ) {
      router.push("/");
      setLoading(false);
    } else if (currentPath == "/") {
      setTimeout(() => {
        setLoading(false);
        router.push("/dashboard/chapters");
      }, 1000);
      // router.push("/dashboard/chapters");
    } else {
      setLoading(false);
      // router.push("/dashboard/chapters");
    }
  }, [currentPath]);

  // useEffect(() => {
  //   const jwt = require("jsonwebtoken");
  //   const token = localStorage?.getItem("token");
  //   if (token) {
  //     const decodedToken = jwt?.decode(token);
  //     const accessRole = decodedToken?.accessRole;
  //     const createdAt = decodedToken?.created_at;
  //   console.log("dateee",creat);
  //     const isfreeTrial = isNotOlderThan7DaysFromCurrentDate(
  //       createdAt?.toString()
  //     );
  //     console.log("isFree", isfreeTrial);
  //     if (
  //       accessRole !== "PremiumPlan" &&
  //       accessRole !== "BasicPlan" &&
  //       accessRole !== "StandardPlan" &&
  //       !isfreeTrial &&
  //       currentPath !== "/verify/verificationSent" &&
  //       currentPath !== "/verify" &&
  //       currentPath !=="/_auth/Auth"
  //     ) {
  //       currentPath !== "/dashboard/SubscribePlans" && router.push("/dashboard/SubscribePlans");
  //     }
  //   }
  // }, [router, currentPath]);

  return (
    <StoreProvider store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
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
          <NewApp>
            <Component {...pageProps} />
          </NewApp>
        )}
      </LocalizationProvider>
    </StoreProvider>
  );
}
