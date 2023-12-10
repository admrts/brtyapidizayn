import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import AboutUs4 from "../../components/About-Us5";
import Testimonials1 from "../../components/Testimonials1";
import Vision from "../../components/Vision";
import Brands3 from "../../components/Brands3";

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
      <Vision />
      <AboutUs4 />
      <Testimonials1 />
      <Brands3 />
    </MainLayout>
  );
};

export default About;
