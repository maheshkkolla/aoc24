import {getMatchedInstructions, executeInstruction, executeAll, part2} from "./index.js";
describe("Day 3", () => {
    describe("getMatchedInstructions", () => {
        test("should return all the matched mul instructions", () => {
            let input = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
            let actual = getMatchedInstructions(input);

            expect(actual).toEqual([ "mul(2,4)", "mul(5,5)", "mul(11,8)", "mul(8,5)" ]);
        });
    });

    describe("executeInstruction", () => {
        test("should give the result of the instruction", () => {

            expect(executeInstruction("mul(2,4)")).toEqual(8);
            expect(executeInstruction("mul(5,5)")).toEqual(25);
        });
    });

    describe("executeAll", () => {
        test("should give the result of the all instructions afte removing the corrupted instructions", () => {

            let input = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

            expect(executeAll(input)).toEqual(161);
        });
    });

    describe("part2", () => {
        test("should give the result of the all instructions afte removing the corrupted instructions", () => {

            let input = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

            expect(part2(input)).toEqual(48);
        });
    });
});