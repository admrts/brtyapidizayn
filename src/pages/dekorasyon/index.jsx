/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const Dekorasyon = () => {
  const title = "Dekorasyon";
  const content =
    "Dekorasyon, yaşam alanlarını estetik açıdan düzenleme sanatıdır. Firmamız, deneyimli tasarımcılarıyla özgün, işlevsel ve estetik açıdan zengin iç mekânlar oluşturur. Her müşterinin ihtiyaçlarına yönelik özelleştirilmiş tasarımlarla, yaşam alanlarınızı yeniden şekillendirir ve estetik bir dokunuşla kişisel tarzınızı yansıtır.";
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

export default Dekorasyon;
