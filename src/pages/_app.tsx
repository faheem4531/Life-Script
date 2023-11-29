import { store } from "@/store/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import { Provider as StoreProvider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "regenerator-runtime/runtime";
import i18n from "../../i18n";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <I18nextProvider i18n={i18n}>
        <GoogleOAuthProvider clientId="662321024353-770la0v8g3rb6ibu3vuammlcgieha740.apps.googleusercontent.com">
          <Component {...pageProps} />
        </GoogleOAuthProvider>
        <ToastContainer />
      </I18nextProvider>
    </StoreProvider>
  );
}
