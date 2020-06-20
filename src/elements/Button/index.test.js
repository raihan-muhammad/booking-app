import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router } from "react-router-dom";

test("Should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled />);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading />);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal />);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("should render <Link> component", () => {
  const { container } = render(
    <Router>
      <Button type="link" href="" />
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
