import { render } from "@testing-library/react";
import FilterDropdown from "@/components/DropDowns/Filter";

describe("FilterDropdown", () => {
    it("renders properly", () => {
        const { getByText } = render(<FilterDropdown />);
        expect(getByText("Filter")).toBeInTheDocument();
    });
});
