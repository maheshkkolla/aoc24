import {getMatchedInstructions} from "./index.js";
describe("Day 3", () => {
    describe("getMatchedInstructions", () => {
        test("should return all the matched mul instructions", () => {
            let input = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
            let actual = getMatchedInstructions(input);

            expect(actual).toEqual([ "mul(2,4)", "mul(5,5)", "mul(11,8)", "mul(8,5)" ]);
        });
    });
});