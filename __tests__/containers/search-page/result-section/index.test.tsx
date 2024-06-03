import React from "react";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import SearchResultSection from "@/containers/search-page/result-section";
import GET_SEARCH_PROPERTIES from "@/graphql/queries/search_properties";

const mocks = [
    {
        request: {
            query: GET_SEARCH_PROPERTIES,
            variables: {
                first: 12,
                after: null,
                search_keyword: "",
                sort: "",
                price_range: "",
                area_range: "",
                type: "",
                property_type: "",
                bedroom: 0,
            },
        },
        result: {
            data: {
                properties: {
                    __typename: "Properties",
                    edges: [],
                    totalCount: 0,
                    pageInfo: {
                        startCursor: "",
                        endCursor: "",
                        hasNextPage: false,
                        hasPreviousPage: false,
                        __typename: "PageInfo",
                    },
                },
            },
        },
    },
];

describe("SearchResultSection component", () => {
    it("displays loading state while fetching data", async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <SearchResultSection searchParams={{}} />
            </MockedProvider>
        );
    });
});
