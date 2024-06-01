import PropertiesHero from "@/containers/properties-page/properties-hero";
import PropertiesSearch from "@/containers/properties-page/search-section";
import React, { FC, Suspense } from "react";
import PropertiesItems from "@/containers/properties-page/items-section";
import type { Metadata } from "next";

interface PropertiesProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
    sort: string | undefined;
  };
}

export const metadata: Metadata = {
  title: 'Buy | ' + process.env.APP_NAME,
  description: "Buy property page.",
};

const Properties: FC<PropertiesProps> = ({ searchParams }) => {
  return (
    <main>
      <PropertiesHero
        title="Buy Properties"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe exercitationem sint nemo magnam culpa soluta cum maxime qui dolores."
      />
      <PropertiesSearch />
      <Suspense fallback={<h1>Loading...</h1>}>
        <PropertiesItems sort={searchParams.sort} type={"SALE"} />
      </Suspense>
    </main>
  );
};

export default Properties;
