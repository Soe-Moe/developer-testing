import { render, fireEvent } from "@testing-library/react";
import AreaRangeDropdown from "@/components/DropDowns/AreaRange";

describe("AreaRangeDropdown", () => {
    it("renders with default label", () => {
        const { getByText } = render(<AreaRangeDropdown />);
        expect(getByText("Area")).toBeInTheDocument();
    });

    it("renders with provided label", () => {
        const { getByText } = render(<AreaRangeDropdown label="Custom Label" />);
        expect(getByText("Custom Label")).toBeInTheDocument();
    });

    it("sets min and max area correctly", () => {
        const { getByPlaceholderText } = render(<AreaRangeDropdown />);
        const minInput = getByPlaceholderText("Min Area (sqft)") as HTMLInputElement;
        const maxInput = getByPlaceholderText("Max Area (sqft)") as HTMLInputElement;

        fireEvent.change(minInput, { target: { value: "100" } });
        fireEvent.change(maxInput, { target: { value: "200" } });

        expect(minInput.value).toBe("100");
        expect(maxInput.value).toBe("200");
    });

    it("disables set button if min area is greater than max area", () => {
        const { getByPlaceholderText, getByText } = render(<AreaRangeDropdown />);
        const minInput = getByPlaceholderText("Min Area (sqft)") as HTMLInputElement;
        const maxInput = getByPlaceholderText("Max Area (sqft)") as HTMLInputElement;
        const setButton = getByText("Set");

        fireEvent.change(minInput, { target: { value: "200" } });
        fireEvent.change(maxInput, { target: { value: "100" } });

        expect(setButton).toBeDisabled();
    });

    it("enables set button if min area is less than or equal to max area", () => {
        const { getByPlaceholderText, getByText } = render(<AreaRangeDropdown />);
        const minInput = getByPlaceholderText("Min Area (sqft)") as HTMLInputElement;
        const maxInput = getByPlaceholderText("Max Area (sqft)") as HTMLInputElement;
        const setButton = getByText("Set");

        fireEvent.change(minInput, { target: { value: "100" } });
        fireEvent.change(maxInput, { target: { value: "200" } });

        expect(setButton).not.toBeDisabled();
    });
});
