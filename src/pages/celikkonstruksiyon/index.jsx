/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const CelikKonstruksiyon = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "Çelik Konstrüksiyon",
        }}
        // title = "text",
        content="Statik proje, mühendislik projelerinin önemli bir aşamasıdır. Yapıların stabilitesini ve dayanıklılığını sağlamak için kullanılır. Bu projeler, yapıların taşıma kapasitesini belirler ve malzeme seçimini içerir. Mühendisler, bina veya köprü gibi yapıların sağlam ve güvenli olmasını garanti altına almak için statik projeleri oluşturur. Bu projeler, yapıların boyutlandırılması, malzeme analizi ve güvenlik faktörlerini içerir. Statik projeler, mühendislik alanında temel bir adımdır ve yapıların uzun süreli sağlamlığını sağlar."
      />
      <WorkTwoColumn />
    </MainLayout>
  );
};

export default CelikKonstruksiyon;
