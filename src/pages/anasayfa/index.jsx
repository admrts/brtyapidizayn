/* eslint-disable @next/next/no-img-element */
import React from "react";
import Services1 from "../../components/Services1";
import IntroWithHorizontal from "../../components/Intro-with-horizontal";
import LightLayout from "../../layouts/light";
import SkillsCircle from "../../components/Skills-circle";
import Testimonials from "../../components/Testimonials1";
import Process from "../../components/Process";

const Home1 = () => {
  return (
    <LightLayout footerClass={"mt-30"}>
      <IntroWithHorizontal />
      <Services1 />
      <Process />
      <Testimonials />
    </LightLayout>
  );
};

export default Home1;
