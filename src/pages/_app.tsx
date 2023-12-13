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

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = usePathname();
  const [chapterCompleted, setChapterCompleted] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("token");

    if (!userLoggedIn) {
      router.push("/_auth/Auth");
    } else if (currentPath == "/") {
      router.push("/dashboard/chapters");
    }
  }, [router, currentPath]);
  return (
    <StoreProvider store={store}>
      <NewApp>
        <Component {...pageProps} />
      </NewApp>
    </StoreProvider>
  );
}
