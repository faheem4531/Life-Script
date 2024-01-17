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
import { updateLuluPaymentStatus } from "@/store/slices/authSlice";

export default function NewApp({ children }) {
  const router = useRouter();
  const dispatch: any = useDispatch();
  const currentPath = usePathname();
  const publicRoutes = ["/_auth/Auth", "/verify/forgetPassword"];

  useEffect(() => {
    dispatch(getChapterNotifications());
  }, []);


  useEffect(() => {
    const userId = localStorage.getItem("userId");
    socket.on("result", (message) => {
      dispatch(getChapterNotifications());
    });

    socket.on("error", (message) => {
      toast.error(message);
      console.log("socket failed");
    })

    socket.on("error", (message) => {});

    socket.emit('joinRoom', userId);
    socket.on("stripeWebhookData", (token) => {
      localStorage.setItem("token", token);
    })

    socket.on("stripeLuluWebhookData", (msg) => {
      console.log("msgggg",msg);
      dispatch(updateLuluPaymentStatus(msg));
    })
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
