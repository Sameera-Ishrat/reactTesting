import { render, screen } from "@testing-library/react";
import Application from "./Application";
import React from "react";

describe("Application", () => {
  test("renders the component correctly", () => {
    render(<Application />);
    //check if the input is present in the component
    const nameElement = screen.getByRole("textbox",{name: /name/i});
    expect(nameElement).toBeInTheDocument();
// checking if select is present in the component
const jobLocationElement = screen.getByRole('combobox', {  name: /job location/i});
expect(jobLocationElement).toBeInTheDocument();
//checking if checkbox is present in the component
const termsElement = screen.getByRole('checkbox', {  name: /i agree to the terms and conditions\./i});
expect(termsElement).toBeInTheDocument();

  });
});
