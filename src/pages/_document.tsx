import { Head, Html, Main, NextScript } from "next/document";
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Clarity Analytics Code */}
        <Script
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
        />
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

        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11454589354"></Script>
        <Script id="google-ads">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11454589354');`}
        </Script>
        {/* Open Graph Protocol Meta Tags */}
        <meta property="og:title" content="The Lifescript" />
        <meta property="og:site_name" content="The Lifescript" />
        <meta property="og:url" content="https://www.thelifescript.com/" />
        <meta property="og:description" content="Turn your stories into a beautiful hardcover book to preserve memories and connect with family or gift this unparalleled experience to your mom, dad or grandparent" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://github.com/Tayyab-103/JavaScript-103/assets/109760448/9b9d0b25-965c-4e98-b719-b9fcdcf67311" />


        {/* Google Search Console */}
        <meta name="google-site-verification" content="wt1qy_zKsDB3gvsPGfgbQoo0d3yvcUK4tOd9wkwSnJE" />

        {/* second */}
        <meta name="google-site-verification" content="FLQHtOf63xbf907IegSWlW9Gj9H_9x1bckZb-9r9EFw" />
      </Head>
      <body style={{ margin: 0 }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
