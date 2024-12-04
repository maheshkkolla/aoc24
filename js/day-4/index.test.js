import {getCombinations} from "./index.js";
describe("Day 4", () => {
    describe("getCombinations", () => {
        test("should get the right combination", () => {
            var actual = getCombinations(5,5);
            expect(actual[0]).toEqual([[5,5],[5,6],[5,7],[5,8]]);
        });

        test("should get the left combination", () => {
            var actual = getCombinations(5,5);
            expect(actual[1]).toEqual([[5,5],[5,4],[5,3],[5,2]]);
        });

        test("should get the bottom combination", () => {
            var actual = getCombinations(5,5);
            expect(actual[2]).toEqual([[5,5],[6,5],[7,5],[8,5]]);
        });

        test("should get the top combination", () => {
            var actual = getCombinations(5,5);
            expect(actual[3]).toEqual([[5,5],[4,5],[3,5],[2,5]]);
        });
    });
});