/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const MimariProje = () => {
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "Mimari Proje",
        }}
        content="Mimari projeler, estetik ve işlevsellik açısından tasarlanmış binaların planlamasını içerir. Yapının dış görünümü, iç mekân düzenlemesi ve kullanıcı ihtiyaçları mimari projelerde önceliklidir. Firmamız, deneyimli mimarlarımızla özgün, işlevsel ve estetik açıdan zengin mimari projeler sunar. Her müşteriye özel çözümler üreterek kaliteyi ön planda tutar."
      />
      <WorkTwoColumn />
    </MainLayout>
  );
};

export default MimariProje;
