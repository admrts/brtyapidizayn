/* eslint-disable @next/next/no-img-element */
import React from "react";
import Services1 from "../../components/Services3";
import IntroWithHorizontal from "../../components/Intro-with-horizontal";
import LightLayout from "../../layouts/light";
import Testimonials from "../../components/Testimonials1";
import Process from "../../components/Process3";

const Home1 = () => {
  return (
    <LightLayout>
      <IntroWithHorizontal />
      <Services1 />
      <Process />
      <Testimonials />
    </LightLayout>
  );
};

export default Home1;
