/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../../layouts/main";
import StonesDetail from "../../../components/StonesDetail";
import data from "../../../data/stonesBricks/stones.json";
import { useRouter } from "next/router";

const Work1 = () => {
  const { query } = useRouter();
  return (
    <MainLayout>
      <StonesDetail id={query.slug} />
    </MainLayout>
  );
};

export default Work1;
