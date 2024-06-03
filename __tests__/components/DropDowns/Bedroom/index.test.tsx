import { render, fireEvent } from "@testing-library/react";
import Bedroom from "@/components/DropDowns/Bedroom";

describe("Bedroom component", () => {
  it("renders properly", () => {
    const { getByText } = render(<Bedroom />);
    expect(getByText("Bedroom")).toBeInTheDocument();
  });
});
