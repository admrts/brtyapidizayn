/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const LazerTarama3dModelleme = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "Lazer Tarama & 3d Modelleme",
        }}
        // title = "text",
        content="Lazer tarama ve 3D modelleme, inşaat sektöründe yenilikçi bir yaklaşımdır. Hassas lazer teknolojisiyle detaylı ölçümler alınarak, binaların, altyapıların ve çevresel unsurların tam olarak dijital ortama aktarılması sağlanır. Firmamız, bu modern teknolojiyi kullanarak, kesin ölçümler ve ayrıntılı 3D modeller sunarak projelerin verimliliğini artırır."
      />
      <WorkTwoColumn />
    </MainLayout>
  );
};

export default LazerTarama3dModelleme;
