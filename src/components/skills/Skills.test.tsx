import {render,screen} from "@testing-library/react";
import Skills from "./Skills";
import React from "react";

describe("Skills", () => {
    const skills = ["HTML", "CSS", "jAVASCRIPT", "REACT", "TYPESCRIPT"];
    test("renders correctly" , () => {
    render(<Skills  skills={skills}/>);
    const linkElement = screen.getByRole('list');
    expect(linkElement).toBeInTheDocument();

    // check for the list ITEMS NOW
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
    });

    // test for login button

    test("renders login button correctly" , () => {
        render(<Skills skills={skills}/>);
        const loginElement = screen.getByRole('button',{name: 'Login'});
        expect(loginElement).toBeInTheDocument()
    });
// test for start learning button not being rendered initially

test("Start learning button is not rendered initially" , () => {
    render(<Skills skills={skills}/>);
    const learningButtonElement = screen.queryByRole('button',{ name: 'Start Learning'});
    expect(learningButtonElement).not.toBeInTheDocument();
})

// testing the asynchrounous code with findByRole

test("Start learning button is eventually present" ,async () => {
    render(<Skills skills={skills}/>);
    const startLearningButtonElement = await screen.findByRole('button',{name: 'Start Learning'},{timeout:2000});
    expect(startLearningButtonElement).toBeInTheDocument();
})

})