import React from "react";
import MainLayout from "../../../../layouts/main";
import data from "./klasik.json";
import FirePlaces from "../../../../components/FirePlaces";

const Page = () => {
  return (
    <MainLayout>
      <FirePlaces data={data} />
    </MainLayout>
  );
};

export default Page;
