import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import AboutUs4 from "../../components/About-Us5";
import Services3 from "../../components/Services3";
import Testimonials1 from "../../components/Testimonials1";
import Team2 from "../../components/Team2";

const About = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Hakkımızda"
        fullPath={[
          { id: 1, name: "Anasayfa", url: "/" },
          { id: 2, name: "Hakkımızda", url: "/about" },
        ]}
        image="/assets/img/brt/about/about.jpg"
      />
      <AboutUs4 />
      <Services3 bigTitle grid />
      <Testimonials1 bigTitle />
    </MainLayout>
  );
};

export default About;