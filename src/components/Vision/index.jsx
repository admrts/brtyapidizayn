import React from "react";
import Head from "next/head";

const Vision = () => {
  return (
    <div className="container mt-100 ">
      <Head>
        <meta name="keywords" content="sdsd" />
      </Head>
      <div className="row">
        <div className="col-12 col-lg-6 mb-30">
          <h3>Vizyon</h3>
          <p>
            Gelişime açık, bilgi ve teknolojiye önem veren yönetim anlayışı ile
            buna bağlı olarak mevcut kadrosunu seçtiği ve bu bakış açısıyla
            geliştirdiği; gerçekleştirdiği faaliyetlerinden edindiği
            tecrübelerle sektöründe yenilikçi ve öncü bir firma olmak.
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <h3>Misyon</h3>
          <p>
            Sektöründe akile, yenilikçi ve sorumluluk anlayisi, çevreye duyarl
            bir sekilde ilerleyerek bünyesinde bulundurdugu teknik ekip ve
            paydaslar ile birlikte algilanan kaliteyi en üst seviyede tutarak
            konforlu ve huzurlu bir yasam sunabilmek amaci ile etkin bir sekilde
            faaliyetlerini hayata gecirmektir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
