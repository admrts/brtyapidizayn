import React from "react";
import MainLayout from "../../../../layouts/main";
import data from "./ltipi.json";
import FirePlaces from "../../../../components/FirePlaces";

const Page = () => {
  return (
    <MainLayout>
      <FirePlaces data={data} title={"L Tipi Şömineler"} />
    </MainLayout>
  );
};

export default Page;
