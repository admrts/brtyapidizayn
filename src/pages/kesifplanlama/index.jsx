/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const KesifPlanlama = () => {
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "Keşif Planlama",
        }}
        // title = "text",
        content="Keşif planlama, inşaat projelerinin başlangıcında önemli bir adımdır. Bu aşamada, maliyet analizi, kaynak tahmini ve proje planlaması yapılır. Firmamız, uzman ekipleriyle detaylı keşif planlaması sunar. Proje gereksinimlerini değerlendirir, bütçe ve zaman çerçevesinde optimize edilmiş çözümler sunarak projenin başarılı bir şekilde ilerlemesini sağlar."
      />
      <WorkTwoColumn />
    </MainLayout>
  );
};

export default KesifPlanlama;
