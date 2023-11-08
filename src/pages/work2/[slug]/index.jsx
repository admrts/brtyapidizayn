/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../../layouts/main";
import { useRouter } from "next/router";
import StonesBricks2 from "../../../components/Stones2";

const Work2 = () => {
  const { query } = useRouter();
  return (
    <MainLayout>
      <StonesBricks2 title={query.slug} />
    </MainLayout>
  );
};

export default Work2;
