import React from "react";
import MainLayout from "../../../layouts/main";
import FirePlaces from "../../../components/FirePlaces";
import odunlusomineler from "./odunlusomineler.json";

const OdunluSomineler = () => {
  return (
    <MainLayout>
      <FirePlaces data={odunlusomineler} title={"Odunlu Şömineler"} />
    </MainLayout>
  );
};

export default OdunluSomineler;
