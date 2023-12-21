import React from "react";
import MainLayout from "../../../../layouts/main";
import BbqDetails from "../../../../components/BbqDetails";
import data from "./data.json";

const DetailPage = () => {
  return (
    <MainLayout>
      <BbqDetails data={data} />
    </MainLayout>
  );
};

export default DetailPage;
