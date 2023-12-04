/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const MimariProje = () => {
  const title = "Mimari Proje";
  const content =
    "Mimari projeler, estetik ve işlevsellik açısından tasarlanmış binaların planlamasını içerir. Yapının dış görünümü, iç mekân düzenlemesi ve kullanıcı ihtiyaçları mimari projelerde önceliklidir. Firmamız, deneyimli mimarlarımızla özgün, işlevsel ve estetik açıdan zengin mimari projeler sunar. Her müşteriye özel çözümler üreterek kaliteyi ön planda tutar.";
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: title,
        }}
        content={content}
      />
      <WorkTwoColumn />
    </MainLayout>
  );
};

export default MimariProje;
