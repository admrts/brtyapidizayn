/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const LazerTarama3dModelleme = () => {
  const title = "Lazer Tarama & 3d Modelleme";
  const content =
    "Lazer tarama ve 3D modelleme, inşaat sektöründe yenilikçi bir yaklaşımdır. Hassas lazer teknolojisiyle detaylı ölçümler alınarak, binaların, altyapıların ve çevresel unsurların tam olarak dijital ortama aktarılması sağlanır. Firmamız, bu modern teknolojiyi kullanarak, kesin ölçümler ve ayrıntılı 3D modeller sunarak projelerin verimliliğini artırır.";
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

export default LazerTarama3dModelleme;
