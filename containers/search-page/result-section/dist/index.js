"use client";
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("@apollo/client");
var PropertyCard_1 = require("@/components/Cards/PropertyCard");
var Sort_1 = require("@/components/DropDowns/Sort");
var search_properties_1 = require("@/graphql/queries/search_properties");
var SearchResultSection = function (_a) {
    var searchParams = _a.searchParams;
    if (searchParams.search ||
        searchParams.price_range ||
        searchParams.area_range ||
        searchParams.type ||
        searchParams.property_type) {
        var _b = 
        // eslint-disable-next-line react-hooks/rules-of-hooks
        client_1.useQuery(search_properties_1["default"], {
            variables: {
                first: 12,
                after: null,
                search: searchParams.search || "",
                sort: searchParams.sort || "",
                price_range: searchParams.price_range || "",
                area_range: searchParams.area_range || "",
                type: searchParams.type || "",
                property_type: searchParams.property_type || ""
            },
            notifyOnNetworkStatusChange: true
        }), loading = _b.loading, error = _b.error, data = _b.data, fetchMore_1 = _b.fetchMore, networkStatus = _b.networkStatus;
        if (loading && networkStatus !== 3)
            return (react_1["default"].createElement("p", { className: "text-slate-500 text-xl text-center py-10" }, "Searching..."));
        if (error)
            return (react_1["default"].createElement("p", { className: "text-red-500 text-center py-10" },
                "Error: ",
                error.message));
        var properties = (data === null || data === void 0 ? void 0 : data.properties.edges) || [];
        var pageInfo_1 = data === null || data === void 0 ? void 0 : data.properties.pageInfo;
        var totalCount = (data === null || data === void 0 ? void 0 : data.properties.totalCount) || 0;
        var loadMoreProperties = function () {
            if (pageInfo_1 === null || pageInfo_1 === void 0 ? void 0 : pageInfo_1.endCursor) {
                fetchMore_1({
                    variables: {
                        after: pageInfo_1.endCursor
                    },
                    updateQuery: function (previousResult, _a) {
                        var fetchMoreResult = _a.fetchMoreResult;
                        if (!fetchMoreResult)
                            return previousResult;
                        return {
                            properties: {
                                __typename: previousResult.properties.__typename,
                                totalCount: previousResult.properties.totalCount,
                                edges: __spreadArrays(previousResult.properties.edges, fetchMoreResult.properties.edges),
                                pageInfo: fetchMoreResult.properties.pageInfo
                            }
                        };
                    }
                });
            }
        };
        return (react_1["default"].createElement("section", { className: "w-full flex justify-center" },
            react_1["default"].createElement("div", { className: "flex flex-col justify-between gap-2 md:gap-5 w-full max-w-screen-xl mx-5 md:mx-20 md:px-0" },
                properties.length && (react_1["default"].createElement("div", { className: "w-full flex justify-start lg:justify-between" },
                    react_1["default"].createElement("div", { className: "flex md:gap-4" },
                        react_1["default"].createElement("h2", { className: "text-2xl md:text-4xl xs:text-md text-black font-bold" }, "Search Results"),
                        react_1["default"].createElement("span", { className: "text-primaryColor text-xs md:text-lg px-4 bg-[#F9F9F9] rounded-lg grid place-items-center h-max" }, totalCount.toLocaleString("en-US"))),
                    react_1["default"].createElement("div", { className: "hidden lg:flex gap-6" },
                        react_1["default"].createElement(Sort_1["default"], null)))),
                properties.length === 0 && (react_1["default"].createElement("div", { className: "flex flex-col text-center gap-5 mb-10" },
                    react_1["default"].createElement("span", { className: "text-2xl font-bold text-secondaryColor" }, "Sorry, No result found."))),
                react_1["default"].createElement("div", { id: "items", className: "w-full grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(330px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(360px,_1fr))] grid flex-wrap gap-[60px]" }, properties.map(function (_a, index) {
                    var node = _a.node;
                    return (react_1["default"].createElement(PropertyCard_1["default"], { key: index, item: node }));
                })),
                properties.length && (react_1["default"].createElement("div", { className: "w-full flex justify-center mb-10" }, (pageInfo_1 === null || pageInfo_1 === void 0 ? void 0 : pageInfo_1.hasNextPage) ? (react_1["default"].createElement("button", { className: "bg-primaryColor flex justify-center items-center w-[130px] mt-5 p-1 md:p-3 md:w-[160px] md:h-[42px] text-sm md:text-md text-white", onClick: loadMoreProperties, disabled: networkStatus === 3 }, networkStatus === 3 ? "Loading..." : "Load More")) : (react_1["default"].createElement("p", { className: "text-slate-500 mt-6" }, "No more properties.")))))));
    }
    return (react_1["default"].createElement("section", { className: "w-full flex justify-center" },
        react_1["default"].createElement("div", { className: "flex flex-col justify-between gap-2 md:gap-5 w-full max-w-screen-xl mx-5 md:mx-20 md:px-0" },
            react_1["default"].createElement("div", { className: "flex flex-col text-center gap-10 py-2 md:py-10 mb-10" },
                react_1["default"].createElement("span", { className: "text-sm md:text-xl text-slate-500" }, "Please enter the filter values to search the properties.")))));
};
exports["default"] = SearchResultSection;
