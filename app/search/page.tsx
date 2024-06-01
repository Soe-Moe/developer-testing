import SearchResultSection from "@/containers/search-page/result-section";
import SearchSection from "@/containers/search-page/search-section";
import React, { FC } from "react";
import type { Metadata } from "next";

interface SearchPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export const metadata: Metadata = {
  title: 'Search | ' + process.env.APP_NAME,
  description: "Search property page."
};

const SearchPage: FC<SearchPageProps> = async ({ searchParams }) => {
  return (
    <main>
      <SearchSection />
      <SearchResultSection searchParams={searchParams} />
    </main>
  );
};

export default SearchPage;
