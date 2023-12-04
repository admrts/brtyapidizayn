/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const KesifPlanlama = () => {
  const title = "Keşif Planlama";
  const content =
    "Keşif planlama, inşaat projelerinin başlangıcında önemli bir adımdır. Bu aşamada, maliyet analizi, kaynak tahmini ve proje planlaması yapılır. Firmamız, uzman ekipleriyle detaylı keşif planlaması sunar. Proje gereksinimlerini değerlendirir, bütçe ve zaman çerçevesinde optimize edilmiş çözümler sunarak projenin başarılı bir şekilde ilerlemesini sağlar.";
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: title,
        }}
        // title = "text",
        content={content}
      />
      <WorkTwoColumn />
    </MainLayout>
  );
};

export default KesifPlanlama;
