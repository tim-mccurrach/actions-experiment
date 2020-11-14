import { add } from "../src/index";

test("check it works", () => {
	const result = add(1, 2, 3);
	expect(result).toBe(6);
});
