import { render, fireEvent } from "@testing-library/react";
import PriceRangeDropdown from '@/components/DropDowns/PriceRange';

describe("PriceRangeDropdown", () => {
  it("renders properly", () => {
    const { getByText } = render(<PriceRangeDropdown />);
    expect(getByText("Price")).toBeInTheDocument();
  });

  it("updates min price correctly", () => {
    const { getByPlaceholderText } = render(<PriceRangeDropdown />);
    const minInput = getByPlaceholderText("Min Price") as HTMLInputElement;

    fireEvent.change(minInput, { target: { value: "100" } });

    expect(minInput.value).toBe("100");
  });

  it("updates max price correctly", () => {
    const { getByPlaceholderText } = render(<PriceRangeDropdown />);
    const maxInput = getByPlaceholderText("Max Price") as HTMLInputElement;

    fireEvent.change(maxInput, { target: { value: "200" } });

    expect(maxInput.value).toBe("200");
  });

  it("disables set button if min price is greater than max price", () => {
    const { getByPlaceholderText, getByText } = render(<PriceRangeDropdown />);
    const minInput = getByPlaceholderText("Min Price") as HTMLInputElement;
    const maxInput = getByPlaceholderText("Max Price") as HTMLInputElement;
    const setButton = getByText("Set");

    fireEvent.change(minInput, { target: { value: "200" } });
    fireEvent.change(maxInput, { target: { value: "100" } });

    expect(setButton).toBeDisabled();
  });

  it("enables set button if min price is less than or equal to max price", () => {
    const { getByPlaceholderText, getByText } = render(<PriceRangeDropdown />);
    const minInput = getByPlaceholderText("Min Price") as HTMLInputElement;
    const maxInput = getByPlaceholderText("Max Price") as HTMLInputElement;
    const setButton = getByText("Set");

    fireEvent.change(minInput, { target: { value: "100" } });
    fireEvent.change(maxInput, { target: { value: "200" } });

    expect(setButton).not.toBeDisabled();
  });
});
