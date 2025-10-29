import { render, screen, fireEvent } from '@testing-library/react';

import Counter from './Counter';

describe("Counter Application rendering", () => {
    test("Initial rendering of counter app", () => {
        // rendering
        render(<Counter />);

        // selection
        const decBtn = screen.getByText("Decrement")
        const incBtn = screen.getByText("Increment")
        const countText = screen.getByText("Count is 0")

        // verify
        expect(decBtn).toBeInTheDocument()
        expect(incBtn).toBeInTheDocument()
        expect(countText).toBeInTheDocument()
    })
})

describe("Counter button handlers", () => {
    test("Increment by 3", () => {
        render(<Counter />);
        const incBtn = screen.getByText("Increment")
        fireEvent.click(incBtn);
        fireEvent.click(incBtn);
        fireEvent.click(incBtn);
        const countText = screen.getByText("Count is 3")
        expect(countText).toBeInTheDocument()

    })
    test("Decrement by 1", () => {
        render(<Counter />);
        const decBtn = screen.getByText("Decrement")
        fireEvent.click(decBtn);
        const countText = screen.getByText("Count is -1")
        expect(countText).toBeInTheDocument()

    })
})