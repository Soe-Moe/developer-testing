import { render, fireEvent } from "@testing-library/react";
import PropertyTypeDropdown from "@/components/DropDowns/PropertyTypeFilter";

describe("PropertyTypeDropdown", () => {
    it("renders properly", () => {
        const { getByText } = render(<PropertyTypeDropdown />);
        expect(getByText("All")).toBeInTheDocument();
    });

    it("updates property type correctly", () => {
        const { getByText } = render(<PropertyTypeDropdown />);
        const propertyType = getByText(/house/i);

        fireEvent.click(propertyType);

        expect(propertyType.parentElement).toHaveClass("bg-slate-100");
    });

    it("clears property type when clear button is clicked", () => {
        const { getByText } = render(<PropertyTypeDropdown />);
        const propertyType = getByText(/house/i);

        fireEvent.click(propertyType);

        const clearButton = getByText("Clear");
        fireEvent.click(clearButton);

        expect(propertyType.parentElement).not.toHaveClass("bg-slate-100");
    });
});
