/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../../layouts/main";
import { useRouter } from "next/router";
import Stones2 from "../../../components/Stones2";

const StonesSlug = () => {
  const { query } = useRouter();
  return (
    <MainLayout>
      {query.slug ? <Stones2 title={query.slug} /> : null}
    </MainLayout>
  );
};

export default StonesSlug;
