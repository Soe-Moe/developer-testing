"use client";
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var Menu_1 = require("@/components/Icons/Menu");
var TypeDropdown = function (_a) {
    var label = _a.label;
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var dropdown = react_1.useRef(null);
    var path = usePathname();
    var searchParams = navigation_1.useSearchParams();
    var params = new URLSearchParams(searchParams === null || searchParams === void 0 ? void 0 : searchParams.toString());
    var _c = react_1.useState(params.get("type") || ""), type = _c[0], setType = _c[1];
    react_1.useEffect(function () {
        if (!isOpen) {
            return;
        }
        function handleClick(event) {
            if (dropdown.current && !dropdown.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        window.addEventListener("click", handleClick);
        // clean up
        return function () { return window.removeEventListener("click", handleClick); };
    }, [isOpen]);
    return (react_1["default"].createElement("div", { className: "relative", ref: dropdown },
        react_1["default"].createElement("input", { type: "hidden", name: "type", value: type.toLowerCase() }),
        react_1["default"].createElement("div", { className: "flex items-center cursor-pointer", onClick: function () { return setIsOpen(function (prev) { return !prev; }); } },
            react_1["default"].createElement(Menu_1.MenuIcon, { className: "pr-1 w-[25px] h-[25px]" }),
            react_1["default"].createElement("span", { className: "text-slate-400 xs:text-sm whitespace-nowrap" }, type
                ? type[0].toUpperCase() + type.toLocaleLowerCase().substring(1)
                : label || "All")),
        react_1["default"].createElement("div", { className: "absolute transition-all overflow-hidden top-full bg-white z-10 shadow-sm border-slate-100 flex flex-col max-h-0 gap-2 p-4 " + (isOpen ? "!p-2 !max-h-[20rem]" : "!p-0 !max-h-0") },
            react_1["default"].createElement("div", { onClick: function () {
                    setType("Sale");
                    setIsOpen(false);
                }, className: "text-sm text-slate-400 " + (type == "Sale" ? "bg-slate-100" : "") + " hover:bg-slate-100 cursor-pointer w-[100px] border p-2 border-solid border-slate-200" },
                react_1["default"].createElement("h3", { className: "" }, "Sale")),
            react_1["default"].createElement("div", { onClick: function () {
                    setType("Rent");
                    setIsOpen(false);
                }, className: "text-sm text-slate-400 " + (type == "Rent" ? "bg-slate-100" : "") + " hover:bg-slate-100 cursor-pointer w-[100px] border p-2 border-solid border-slate-200" },
                react_1["default"].createElement("h3", null, "Rent")),
            type && (react_1["default"].createElement("div", { className: "text-center" },
                react_1["default"].createElement("span", { onClick: function () {
                        setType("");
                        setIsOpen(false);
                    }, className: "text-xs text-slate-500 cursor-pointer" }, "Clear"))))));
};
exports["default"] = TypeDropdown;
