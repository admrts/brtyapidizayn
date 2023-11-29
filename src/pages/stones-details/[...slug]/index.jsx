/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../../layouts/main";
import StonesDetail from "../../../components/StonesDetail";
import { useRouter } from "next/router";

const Work1 = () => {
  const { query } = useRouter();
  return (
    <MainLayout>
      {query.slug ? (
        <StonesDetail category={query.slug[0]} name={query.slug[1]} />
      ) : null}
    </MainLayout>
  );
};

export default Work1;
