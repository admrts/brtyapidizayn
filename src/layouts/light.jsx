/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

const LightLayout = ({ children, footerClass }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style-light.css" />
      </Head>
      <Navbar />
      {children}
      <Footer classText={footerClass} />
    </>
  );
};

export default LightLayout;
