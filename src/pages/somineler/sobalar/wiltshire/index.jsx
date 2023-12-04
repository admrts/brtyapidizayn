import React from "react";
import MainLayout from "../../../../layouts/main";
import FirePlaces from "../../../../components/FirePlaces";
import data from "./wiltshire.json";

const Page = () => {
  return (
    <MainLayout>
      <FirePlaces data={data} title={"W. Hshire Serisi"} />
    </MainLayout>
  );
};

export default Page;
