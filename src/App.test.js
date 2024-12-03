import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import { MemoryRouter } from "react-router-dom";

test("renders the component with this text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Our Solutions designed for you/i); // Case-insensitive match
  expect(linkElement).toBeInTheDocument();
});