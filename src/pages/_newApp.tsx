import socket from "@/services/socketManager";
import { getChapterNotifications } from "@/store/slices/chatSlice";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "regenerator-runtime/runtime";
import i18n from "../../i18n";

export default function NewApp({ children }) {
  const router = useRouter();
  const dispatch: any = useDispatch();
  const currentPath = usePathname();
  const publicRoutes = ["/_auth/Auth", "/verify/forgetPassword"];

  useEffect(() => {
    dispatch(getChapterNotifications());
  }, []);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("token");

    if (!userLoggedIn && !publicRoutes.includes(currentPath)) {
      router.push("/_auth/Auth");
    } else if (currentPath == "/") {
      router.push("/dashboard/chapters");
    }
  }, [router, currentPath]);

  useEffect(() => {
    socket.on("result", (message) => {
      dispatch(getChapterNotifications());
    });
    socket.on("error", (message) => {
      toast.error(message);
      console.log("socket failed");
    });
    socket.on("chapterCompilingStatus", (message) => {});
    socket.on("error", (message) => {});
  }, []);

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
          {/* <Component {...children} /> */}
          {children}
        </GoogleOAuthProvider>
        <ToastContainer />
      </I18nextProvider>
    </>
  );
}
