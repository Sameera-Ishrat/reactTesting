import {render,screen,fireEvent} from "@testing-library/react";
import ThemedComponent from "./ThemedComponent";
import { ThemeProvider } from "./ThemeContext";
import React from "react";
import user from "@testing-library/user-event";

describe("ThemedComponent", () => {
    test("render the component correctly", async() => {
        user.setup();
        render(
            <ThemeProvider>
                <ThemedComponent/>
            </ThemeProvider>
        )

        // Initial State
        const themeElement = screen.getByTestId("theme");
        expect(themeElement.textContent).toBe('light');

        //Toggle Theme
        const buttonElement = screen.getByRole('button');
    //   await user.click(buttonElement);
    fireEvent.click(buttonElement) // when using fireEvent the function doesn't have to be async
      expect(themeElement.textContent).toBe('dark');

      // toggle theme alternate

   
      
    })

})

// Alternate way usinf fireEvent

