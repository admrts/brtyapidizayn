/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import WorkWithOutFilter from "../../components/Work-Without-Filter";

const Work1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "Statik Proje",
        }}
        // title = "text",
        content="MİMARİ PROJEYE UYGUN OLARAK, ÖLÇEKLERİ YAPININ BÜYÜKLÜĞÜNE VE PROJENİN ÖZELLİĞİNE GÖRE BETONARME, YIĞMA, ÇELİK VE BENZERİ YAPI TÜRLERİNİN TAŞIYICI SİSTEMLERİNİ GÖSTEREN VE BUNLARIN KESİTLERİ, DETAYLARI İLE HESAPLARI TARAFIMIZCA SİZLER İÇİN YAPILMAKTADIR. MÜHENDİSLİKTE TASARIMLARIMIZ 3E KURALINA UYGUN OLARAK YAPILMAKTADIR."
      />
      <WorkWithOutFilter />
    </MainLayout>
  );
};

export default Work1;
