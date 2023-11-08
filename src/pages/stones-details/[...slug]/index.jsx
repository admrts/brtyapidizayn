/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../../layouts/main";
import StonesDetail from "../../../components/StonesDetail";
import data from "../../../data/stonesBricks/stones.json";
import { useRouter } from "next/router";
import stones from "../../../data/stonesBricks/stones.json";

const Work1 = () => {
  const { query } = useRouter();
  return (
    <MainLayout>
      <StonesDetail category={query.slug[0]} name={query.slug[1]} />
    </MainLayout>
  );
};

export default Work1;
