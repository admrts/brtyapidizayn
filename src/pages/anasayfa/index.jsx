/* eslint-disable @next/next/no-img-element */
import React from "react";
import IntroWithHorizontal from "../../components/Intro-with-horizontal";
import LightLayout from "../../layouts/light";
import Process from "../../components/Process3";
import Services3 from "../../components/Services3";
import Services6 from "../../components/Services6";
import Head from "next/head";

const Home1 = () => {
  return (
    <LightLayout>
      <Head>
        <title>Anasayfa | brt yapı dizayn</title>
      </Head>
      <IntroWithHorizontal />
      <Services3 />
      <Services6 />
      <Process />
    </LightLayout>
  );
};

export default Home1;
