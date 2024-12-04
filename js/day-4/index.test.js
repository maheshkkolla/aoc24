import {getCombinations, getWordFrom} from "./index.js";
describe("Day 4", () => {
    describe("getCombinations", () => {
        test("should get the right combination", () => {
            let actual = getCombinations(5,5);
            expect(actual[0]).toEqual([[5,5],[5,6],[5,7],[5,8]]);
        });

        test("should get the left combination", () => {
            let actual = getCombinations(5,5);
            expect(actual[1]).toEqual([[5,5],[5,4],[5,3],[5,2]]);
        });

        test("should get the bottom combination", () => {
            let actual = getCombinations(5,5);
            expect(actual[2]).toEqual([[5,5],[6,5],[7,5],[8,5]]);
        });

        test("should get the top combination", () => {
            let actual = getCombinations(5,5);
            expect(actual[3]).toEqual([[5,5],[4,5],[3,5],[2,5]]);
        });
    });

    describe("getWordFrom", () => {
        test("should return the word from the locations - horizontal", () => {
           let input = [[1,2], [1,3], [1,4], [1,5]];
           let fullArray = [["r", "a", "n", "d", "o", "m"], ["a", "b", "x", "m", "a", "s"]]
           let actual = getWordFrom(input, fullArray);
           expect(actual).toEqual("xmas");
        });

        test("should return the word from the locations - vertical", () => {
           let input = [[0,3], [1,3], [2,3]];
           let fullArray = [["r", "a", "n", "d", "o", "m"], ["a", "b", "x", "m", "a", "s"], ["a", "b", "c", "d", "e", "f"]]
           let actual = getWordFrom(input, fullArray);
           expect(actual).toEqual("dmd");
        });

        test("should return the word from the locations - invalid vertical input", () => {
           let input = [[0,3], [-1,3], [-2,3]];
           let fullArray = [["r", "a", "n", "d", "o", "m"], ["a", "b", "x", "m", "a", "s"], ["a", "b", "c", "d", "e", "f"]]
           let actual = getWordFrom(input, fullArray);
           expect(actual).toEqual("d");
        });

        test("should return the word from the locations - invalid horizontal input", () => {
           let input = [[0,-1], [0,-2], [0,-3]];
           let fullArray = [["r", "a", "n", "d", "o", "m"], ["a", "b", "x", "m", "a", "s"], ["a", "b", "c", "d", "e", "f"]]
           let actual = getWordFrom(input, fullArray);
           expect(actual).toEqual("");
        });
    });
});