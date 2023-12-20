import type { AppProps } from "next/app";
import { Provider as StoreProvider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "regenerator-runtime/runtime";
import "../styles/globals.css";
import NewApp from "./_newApp";

import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { store } from "../store/store";
import { toast } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = usePathname();
  const [chapterCompleted, setChapterCompleted] = useState(false);

  //verify auth
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("token");
    if (!userLoggedIn) {
      router.push("/_auth/Auth");
    } else if (currentPath == "/") {
      router.push("/dashboard/chapters");
    }
  }, [router, currentPath]);

  function isNotOlderThan7DaysFromCurrentDate(timeString: string): boolean {
    const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    const inputDate = new Date(timeString);
    const timeDifference = new Date().getTime() - inputDate.getTime();
    return timeDifference < sevenDaysInMilliseconds;
  }
  

  //check free trail expiration
  useEffect(() => {
    const jwt = require("jsonwebtoken");
    const token = localStorage.getItem("token");
if (token) {
  const decodedToken = jwt.decode(token);
  const accessRole = decodedToken.accessRole;
  const createdAt = decodedToken.created_at;
  const isfreeTrial = isNotOlderThan7DaysFromCurrentDate(createdAt?.toString());
  if (
    accessRole !== "PremiumPlan" &&
    accessRole !== "BasicPlan" &&
    accessRole !== "StandardPlan" &&
    !isfreeTrial
  ) {
    router.push("/dashboard/SubscribePlans");
  }
}
  },[router, currentPath])
  
  return (
    <StoreProvider store={store}>
      <NewApp>
        <Component {...pageProps} />
      </NewApp>
    </StoreProvider>
  );
}
