import { render, screen } from '@testing-library/react';
import Greet from './Greet';
import React from 'react';

describe('Greet', () => {
    test('Greet renders correctly', () => {
        render(<Greet  />);
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument();
    })
    test('Greet returns a name',() => {
    render(<Greet name="sameera" />);
    const textElement = screen.getByText('hello sameera');
    expect(textElement).toBeInTheDocument();
    })
    
    
    
})

