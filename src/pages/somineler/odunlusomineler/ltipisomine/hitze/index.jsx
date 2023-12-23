import React from "react";
import MainLayout from "../../../../../layouts/main";
import data from "./data.json";
import FirePlaces from "../../../../../components/FirePlaces";

const Page = () => {
  return (
    <MainLayout>
      <FirePlaces data={data} title={"Hitze"} />
    </MainLayout>
  );
};

export default Page;
