"use strict";
exports.__esModule = true;
var Search_1 = require("@/components/Forms/Inputs/Search");
var react_1 = require("react");
var ProductsSearch = function (_a) {
    return (react_1["default"].createElement("section", { className: "w-full flex justify-center" },
        react_1["default"].createElement("div", { className: " flex flex-col md:flex-row justify-between py-10 md:pb-28 items-center gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20 " },
            react_1["default"].createElement("div", { className: "w-full shadow-[0_4px_120px_0px_rgba(175,173,181,0.3)]" },
                react_1["default"].createElement(Search_1["default"], null)))));
};
exports["default"] = ProductsSearch;
