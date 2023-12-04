/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const StatikProje = () => {
  const title = "Statik Proje";
  const content =
    "Statik projeler, bina ve altyapıların dayanıklılığını sağlayan temel unsurlardan biridir. Mimarlar ve inşaat mühendisleri tarafından oluşturulan bu projeler, yapıların stabilitesini, yük taşıma kapasitesini ve güvenliğini belirler. Doğru hesaplamalar ve mühendislik prensipleriyle oluşturulan statik projeler, binaların uzun ömürlü olmasını sağlar. Firmamız, uzman kadrosuyla güvenilir ve etkili statik proje hizmetleri sunmaktadır.";
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

export default StatikProje;
