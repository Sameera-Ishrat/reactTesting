import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import React from "react";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toBeInTheDocument();
    //get the button

    const buttonElement = screen.getByRole("button", { name: "Increment" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders the count 0 correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders the count 1 after clicking the button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    //after clicking the button make sure the counter is incremented to 1
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1")
  });

  test('renders a count of 2 after clicking the increment button twice',async() => {
   user.setup();
   render(<Counter />)  
   const incrementButton = screen.getByRole('button',{name:'Increment'});
// for(let i = 0; i < 2; i++) {
//     await user.click(incrementButton);
// }
await user.dblClick(incrementButton);
   const countElement = screen.getByRole('heading',{level:1});
   expect(countElement).toHaveTextContent("2")
})

test('renders a count of 10 after clicking the set button',async() => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole('spinbutton');
    await user.type(amountInput,'10');
    expect(amountInput).toHaveValue(10);

    // now set the count value when clicked on set button
const setButton = screen.getByRole('button',{name:'Set'});
await user.click(setButton);

const countElement = screen.getByRole('heading',{level:1});
expect(countElement).toHaveTextContent("10")
})

test("elements are focused in the right order" , async() => {
    user.setup();
    render(<Counter/>)
    const incrementButton = screen.getByRole('button',{name:'Increment'});
    const amountButton = screen.getByRole('spinbutton');
    const setButton = screen.getByRole('button',{name:'Set'});
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountButton).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
})

});
