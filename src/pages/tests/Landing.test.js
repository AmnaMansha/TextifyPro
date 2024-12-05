import { render, screen, fireEvent } from "@testing-library/react";
import Landing from "./../Landing.js";
import { MemoryRouter } from "react-router-dom";


// Mock components used in the Landing component
jest.mock("./../../common/Footer", () => () => <div>Footer</div>);
jest.mock("./../../common/Header", () => () => <div>Header</div>);
jest.mock("./../../common/Cards", () => () => <div>Cards</div>);
jest.mock("./../../Component/Carasouel", () => () => <div>Carasouel</div>);
jest.mock("./../../Component/Slider", () => () => <div>Slider</div>);
jest.mock("./../../Component/Counter", () => () => <div>Counter</div>);

describe("Landing Component" () => {
  test("should render the Header component", () => {
    render(<Landing/>, { wrapper: MemoryRouter });
    expect(screen.getByText("Header")).toBeInTheDocument();
  });

  test("should render the Footer component", () => {
    render(<Landing/>, { wrapper: MemoryRouter });
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  test("should navigate to /bookdemo on clicking Try it for free button", () => {
    render(<Landing/>, { wrapper: MemoryRouter });
    const button = screen.getByRole("button", { name: /Try it for free/i });
    fireEvent.click(button);
    expect(window.location.pathname).toBe("/");
  });

  test("should render the Our Partners section with images", () => {
    render(<Landing/>, { wrapper: MemoryRouter });
    const partnerImages = screen.getAllByAltText("partner");
    expect(partnerImages).toHaveLength(4); // Assuming there are 4 partners
  });
});
