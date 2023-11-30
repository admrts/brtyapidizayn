import React from "react";
import MainLayout from "../../layouts/main";
import FirePlaces from "../../components/FirePlaces";
import somineler from "./somineler.json";

const Somineler = () => {
  return (
    <MainLayout>
      <FirePlaces data={somineler} title={"Şömineler"} />
    </MainLayout>
  );
};

export default Somineler;
