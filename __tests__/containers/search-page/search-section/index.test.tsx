import React from "react";
import { render } from "@testing-library/react";
import SearchSection from "@/containers/search-page/search-section";

jest.mock("../../../../components/Forms/Inputs/Search", () => ({
    __esModule: true,
    default: () => <input />,
}));

jest.mock("../../../../components/Forms/Inputs/MobileSearch", () => ({
    __esModule: true,
    default: () => <input />,
}));

describe("SearchSection component", () => {
    it("renders without errors", () => {
        render(<SearchSection />);
    });
});
