import {sum, divide, multiply, subtract} from "./sum.js"

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test("divides 2 / 1 to equal 1", ()=>{
    expect(divide(2, 1)).toBe(2)
})