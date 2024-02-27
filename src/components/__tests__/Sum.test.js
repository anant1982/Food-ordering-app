import { Sum } from "../Sum";

test("Sum function should calculate sum of the two numbers", () => {
	const result = Sum(4, 5);
	expect(result).toBe(9);
});
