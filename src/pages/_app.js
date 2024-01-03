import React from "react";
import Script from "next/script";
import Head from "next/head";
import LoadingScreen from "../components/Loading-Screen/loading-screen";
import ScrollToTop from "../components/scrollToTop";
import Whatsapp from "../components/Whatsapp";
import "../styles/globals.css";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  // Router.events.on("routeChangeStart", () => {
  //   console.log("Sayfa değiştiriliyor");
  // });

  // Router.events.on("routeChangeComplete", () => {
  //   console.log("sayfa yüklemesi bitti");
  // });

  return (
    <>
      <Head>
        <title>brt yapı dizayn</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta lang="tr" />
        <meta translate="no" />
      </Head>

      <LoadingScreen />
      <Component {...pageProps} />
      <ScrollToTop />
      <Whatsapp />

      <Script id="wow" src="/assets/js/wow.min.js"></Script>
      <Script
        id="splitting"
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>

      <Script
        id="simpleParallax"
        src="/assets/js/simpleParallax.min.js"
      ></Script>
      <Script id="isotope" src="/assets/js/isotope.pkgd.min.js"></Script>

      <Script src="/assets/js/main.js" id="init" strategy="lazyOnload"></Script>
    </>
  );
}

export default MyApp;
