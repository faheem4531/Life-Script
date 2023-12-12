import TransitionsDialog from "@/components/modal/TransitionDialog";
import socket from "@/services/socketManager";
import { store } from "@/store/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { Provider as StoreProvider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "regenerator-runtime/runtime";
import i18n from "../../i18n";
import "../styles/globals.css";

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

  useEffect(() => {
    socket.on("result", (message) => {
      console.log("Received result:", message);
      setChapterCompleted(true);
      // Handle the result as needed
    });
  }, []);

  return (
    <>
      <StoreProvider store={store}>
        <I18nextProvider i18n={i18n}>
          <GoogleOAuthProvider clientId="662321024353-770la0v8g3rb6ibu3vuammlcgieha740.apps.googleusercontent.com">
            <Component {...pageProps} />
          </GoogleOAuthProvider>
          <ToastContainer />
        </I18nextProvider>
      </StoreProvider>
      <TransitionsDialog
        open={chapterCompleted}
        heading="Chapter Written"
        description="Your chapter is written, want to read?"
        cancel={() => {
          setChapterCompleted(false);
        }}
        closeModal={() => {
          setChapterCompleted(false);
        }}
        proceed={() => {
          router.push("/dashboard/chapters/completedChapter");
          setChapterCompleted(false);
        }}
      />
    </>
  );
}
