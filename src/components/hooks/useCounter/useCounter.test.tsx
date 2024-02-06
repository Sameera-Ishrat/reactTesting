import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("render correctly", () => {
    // Mock the useCounter hook with initialCount: 0
    const { result } = renderHook(() => useCounter({ initialCount: 0 }));
    expect(result.current.count).toBe(0);
  });

  test("should increment the current count", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 0 }));

    //simulate the increment  actions
    act(() => result.current.incrementCounter());
    expect(result.current.count).toBe(1);
  });

  test("should decrement the current count", () => {
    const {result } = renderHook(() => useCounter({ initialCount:0}));
//simulate the decremnet actions
 act(() => result.current.decrementCounter());
 expect(result.current.count).toBe(0);
  })
});
