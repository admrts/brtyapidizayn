/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs1 from "../../components/About-Us1";
import Services1 from "../../components/Services1";
import IntroWithHorizontal from "../../components/Intro-with-horizontal";
import LightLayout from "../../layouts/light";
import Portfolio1 from "../../components/Portfolio1";
import SkillsCircle from "../../components/Skills-circle";
import Testimonials from "../../components/Testimonials1";
import Team1 from "../../components/Team1";
import Blogs1 from "../../components/Blogs1";
import Contact from "../../components/Contact";

const Home1 = () => {
  return (
    <LightLayout footerClass={"mt-30"}>
      <IntroWithHorizontal />
      <Services1 />
      <SkillsCircle />
      <Testimonials />
    </LightLayout>
  );
};

export default Home1;
