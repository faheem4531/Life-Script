"use client";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Provider as StoreProvider } from "react-redux";
import { store } from "../store/store";

// import WProofreaderSDK from "@webspellchecker/wproofreader-sdk-js";
import AuthPage from "./_auth/Auth";

const inter = Inter({ subsets: ["latin"] });

// WProofreaderSDK.configure({
//   autoSearch: true,
//   lang: "en_US",
//   serviceId: "Ab3LN4j1whCuJFw",
// });

export default function Home() {
  // useEffect(() => {
  //   const scriptConfig = document.createElement("script");
  //   scriptConfig.src = "/wscbundle_config.js";
  //   scriptConfig.async = true;
  //   document.head.appendChild(scriptConfig);

  //   const scriptProofreader = document.createElement("script");
  //   scriptProofreader.src =
  //     "https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js";
  //   scriptProofreader.async = true;
  //   document.head.appendChild(scriptProofreader);

  //   // Cleanup the scripts when the component unmounts
  //   return () => {
  //     document.head.removeChild(scriptConfig);
  //     document.head.removeChild(scriptProofreader);
  //   };
  // }, []);

  return (
    <>
      <StoreProvider store={store}>
        <Head>
          <title>LifeScript</title>
          <meta
            name="facebook-domain-verification"
            content="4juom1wbc7mn3on53shgvpk9p7oyua"
          />
        </Head>
        <AuthPage />
      </StoreProvider>
    </>
  );
}
