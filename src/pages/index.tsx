"use client";
import { Inter } from "next/font/google";
import Head from "next/head";

// import WProofreaderSDK from "@webspellchecker/wproofreader-sdk-js";
import Script from "next/script";
import HomePage from './home';

const inter = Inter({ subsets: ["latin"] });
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: 'Easily Create or Gift a Personal Autobiography Book - LifeScript',
    default: 'LifeScript',
  },
  description: 'Turn your stories into a beautiful hardcover book to preserve memories and connect with family or gift this unparalleled experience to your mom, dad, or grandparent.',
  metadataBase: new URL('https://thelifescript.com/'),
};


export default function Home() {
  return (
    <>
      {/* Clarity Analytics Code */}
      {/* <Script
          id="clarity"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/lpnt5cc9c6";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "lpnt5cc9c6");
            `,
          }}
        /> */}



      {/* Google Analytics Code */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-RGM8D41H5K"
      />

      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-RGM8D41H5K');
          `}
      </Script>

      <HomePage />
    </>
  );
}
