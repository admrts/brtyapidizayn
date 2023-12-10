import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

const MainLayout = ({ children, logoClassText }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <Navbar logoClass={logoClassText} />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
