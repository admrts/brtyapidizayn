/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";
import Head from "next/head";

const CelikKonstruksiyon = () => {
  const title = "Çelik Konstrüksiyon";
  const content =
    "Çelik konstrüksiyon, dayanıklı ve esnek yapısıyla inşaat sektöründe önemli bir yer tutar. Firmamız, uzman ekibiyle çelik yapılarının tasarımından montajına kadar her aşamada kaliteli ve güvenilir hizmet sunar. Yüksek mukavemetli çelik kullanarak, sağlam ve uzun ömürlü yapılar inşa eder, projeleri güvenle tamamlar.";

  return (
    <MainLayout>
      <Head>
        <title>Çelik Konstruksiyon</title>
        <meta name="description" content={title} />
        <meta name="description" content={content} />
      </Head>
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

export default CelikKonstruksiyon;
