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
import LiveChat from "@/components/liveChat/LiveChat";

export default function NewApp({ children }) {
  const router = useRouter();
  const dispatch: any = useDispatch();
  const currentPath = usePathname();
  const publicRoutes = ["/_auth/Auth", "/verify/forgetPassword"];

  useEffect(() => {
    dispatch(getChapterNotifications());
  }, []);

  useEffect(() => {
    socket.on("result", (message) => {
      dispatch(getChapterNotifications());
    });

    socket.on("error", (message) => {
      toast.error(message);

    });

    socket.on("error", (message) => { });

    socket.on("stripeWebhookData", (token) => {
      localStorage.setItem("token", token);
    });

    socket.on("stripeLuluWebhookData", (msg) => {
      dispatch(updateLuluPaymentStatus(msg));
    });
  }, []);

  useEffect(() => {
    if (typeof window != "undefined") {
      const jwt = require("jsonwebtoken");
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = jwt.decode(token);

        const accessRole = decodedToken?.accessRole;
        socket.emit("joinRoom", decodedToken._id);
      }
    }
  }, []);

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
          {/* <Component {...children} /> */}
          <LiveChat />
          {children}
        </GoogleOAuthProvider>
        <ToastContainer />
      </I18nextProvider>
    </>
  );
}
