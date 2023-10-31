import { store } from "@/store/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";
import { Provider as StoreProvider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <GoogleOAuthProvider clientId="662321024353-770la0v8g3rb6ibu3vuammlcgieha740.apps.googleusercontent.com">
        <Component {...pageProps} />
      </GoogleOAuthProvider>
      <ToastContainer />
    </StoreProvider>
  );
}
