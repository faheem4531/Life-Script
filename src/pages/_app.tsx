import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import type { AppProps } from "next/app";
import { Provider as StoreProvider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "regenerator-runtime/runtime";
import "../styles/globals.css";
import NewApp from "./_newApp";

import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { store } from "../store/store";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = usePathname();

  const publicRoutes = ["/_auth/Auth", "/verify/forgetPassword"];

  //verify auth
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("token");
    if (!userLoggedIn && !publicRoutes.includes(currentPath)) {
      router.push("/_auth/Auth");
    } else if (currentPath == "/") {
      router.push("/dashboard/chapters");
    }
  }, [router, currentPath]);

  function isNotOlderThan7DaysFromCurrentDate(timeString: string): boolean {
    const sevenDaysInMilliseconds = 17 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    const inputDate = new Date(timeString);
    const timeDifference = new Date().getTime() - inputDate.getTime();
    return timeDifference < sevenDaysInMilliseconds;
  }

  useEffect(() => {
    const jwt = require("jsonwebtoken");
    const token = localStorage?.getItem("token");
    if (token) {
      const decodedToken = jwt?.decode(token);
      const accessRole = decodedToken?.accessRole;
      const createdAt = decodedToken?.created_at;
      const isfreeTrial = isNotOlderThan7DaysFromCurrentDate(
        createdAt?.toString()
      );
      if (
        accessRole !== "PremiumPlan" &&
        accessRole !== "BasicPlan" &&
        accessRole !== "StandardPlan" &&
        !isfreeTrial &&
        currentPath !== "/verify/verificationSent" &&
        currentPath !== "/verify" &&
        currentPath !== "/_auth/Auth"
      ) {
        currentPath !== "/dashboard/SubscribePlans" &&
          router.push("/dashboard/SubscribePlans");
      }
    }
  }, [router, currentPath]);

  return (
    <StoreProvider store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <NewApp>
          <Component {...pageProps} />
        </NewApp>
      </LocalizationProvider>
    </StoreProvider>
  );
}
