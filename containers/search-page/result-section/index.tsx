"use client";
import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import PropertyCard from "@/components/Cards/PropertyCard";
import SortDropDown from "@/components/DropDowns/Sort";
import { TProperty } from "@/types/TProperty";
import GET_SEARCH_PROPERTIES from "@/graphql/queries/search_properties";

interface SearchResultSectionProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

interface Edge {
  node: TProperty;
  cursor: string;
}

interface PropertiesData {
  properties: {
    __typename: string;
    edges: Edge[];
    totalCount: number;
    pageInfo: {
      startCursor: string;
      endCursor: string;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  };
}

const SearchResultSection: FC<SearchResultSectionProps> = ({
  searchParams,
}) => {
  if (
    searchParams.keyword ||
    searchParams.price_range ||
    searchParams.area_range ||
    searchParams.type ||
    searchParams.property_type
  ) {
    const { loading, error, data, fetchMore, networkStatus } =
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useQuery<PropertiesData>(GET_SEARCH_PROPERTIES, {
        variables: {
          first: 12,
          after: null,
          search_keyword: searchParams.keyword || "",
          sort: searchParams.sort || "",
          price_range: searchParams.price_range || "",
          area_range: searchParams.area_range || "",
          type: searchParams.type || "",
          property_type: searchParams.property_type || "",
        },
        notifyOnNetworkStatusChange: true,
      });

    if (loading && networkStatus !== 3)
      return (
        <p className="text-slate-500 text-xl text-center py-10">Searching...</p>
      );
    if (error)
      return (
        <p className="text-red-500 text-center py-10">Error: {error.message}</p>
      );

    const properties = data?.properties.edges || [];
    const pageInfo = data?.properties.pageInfo;
    const totalCount = data?.properties.totalCount || 0;

    const loadMoreProperties = () => {
      if (pageInfo?.endCursor) {
        fetchMore({
          variables: {
            after: pageInfo.endCursor,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) return previousResult;

            return {
              properties: {
                __typename: previousResult.properties.__typename,
                totalCount: previousResult.properties.totalCount,
                edges: [
                  ...previousResult.properties.edges,
                  ...fetchMoreResult.properties.edges,
                ],
                pageInfo: fetchMoreResult.properties.pageInfo,
              },
            };
          },
        });
      }
    };

    return (
      <section className="w-full flex justify-center">
        <div className="flex flex-col justify-between gap-2 md:gap-5 w-full max-w-screen-xl mx-5 md:mx-20 md:px-0">
          {properties.length && (
            <div className="w-full flex justify-start lg:justify-between">
              <div className="flex md:gap-4">
                <h2 className="text-2xl md:text-4xl xs:text-md text-black font-bold">
                  Search Results
                </h2>
                <span className="text-primaryColor text-xs md:text-lg px-4 bg-[#F9F9F9] rounded-lg grid place-items-center h-max">
                  {totalCount.toLocaleString("en-US")}
                </span>
              </div>
              <div className="hidden lg:flex gap-6">
                <SortDropDown />
              </div>
            </div>
          )}
          {properties.length === 0 && (
            <div className="flex flex-col text-center gap-5 mb-10">
              <span className="text-2xl font-bold text-secondaryColor">
                Sorry, No result found.
              </span>
            </div>
          )}
          <div
            id="items"
            className="w-full grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(330px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(360px,_1fr))] grid flex-wrap gap-[60px]"
          >
            {properties.map(({ node }: Edge, index: number) => (
              <PropertyCard key={index} item={node} />
            ))}
          </div>
          {properties.length && (
            <div className="w-full flex justify-center mb-10">
              {pageInfo?.hasNextPage ? (
                <button
                  className="bg-primaryColor flex justify-center items-center w-[130px] mt-5 p-1 md:p-3 md:w-[160px] md:h-[42px] text-sm md:text-md text-white"
                  onClick={loadMoreProperties}
                  disabled={networkStatus === 3}
                >
                  {networkStatus === 3 ? "Loading..." : "Load More"}
                </button>
              ) : (
                <p className="text-slate-500 mt-6">No more properties.</p>
              )}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col justify-between gap-2 md:gap-5 w-full max-w-screen-xl mx-5 md:mx-20 md:px-0">
        <div className="flex flex-col text-center gap-10 py-2 md:py-10 mb-10">
          <span className="text-sm md:text-xl text-slate-500">
            Please enter the filter values to search the properties.
          </span>
        </div>
      </div>
    </section>
  );
};

export default SearchResultSection;
