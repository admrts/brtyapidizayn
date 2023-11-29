import React from "react";
import MainLayout from "../../../layouts/main";
import Fireplaces2 from "../../../components/Fireplaces2";
import { useRouter } from "next/router";

const Slug = () => {
  const { query } = useRouter();
  return (
    <MainLayout>
      {query.slug ? <Fireplaces2 href={query.slug} /> : null}
    </MainLayout>
  );
};

export default Slug;
