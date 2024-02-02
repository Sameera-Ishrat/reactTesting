import { render, screen } from '@testing-library/react';
import Greet from './Greet';
import React from 'react';

test('Greet renders correctly', () => {
    render(<Greet  />);
    const textElement = screen.getByText("hello");
    expect(textElement).toBeInTheDocument();
})
test('Greet returns a name',() => {
render(<Greet name="sameera" />);
screen.debug();
const textElement = screen.getByText('hello sameera');
expect(textElement).toBeInTheDocument();
})


