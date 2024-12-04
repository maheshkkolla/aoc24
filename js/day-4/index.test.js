import {getCombinations} from "./index.js";
describe("Day 4", () => {
    describe("getCombinations", () => {
        test("should get the right combination", () => {
            var actual = getCombinations(5,5);
            expect(actual[0]).toEqual([[5,5],[5,6],[5,7],[5,8]]);
        });
    });
});