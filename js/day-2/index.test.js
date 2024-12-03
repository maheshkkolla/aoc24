import {countByGroups, calculateTotalSimilarityScore} from "./index.js";
describe("Day 2", () => {
    describe("countByGroups", () => {
        test("should give the count of each number in the list", () => {
            let input = [2, 1, 3, 4, 2, 3, 2, 2];
            let actual = countByGroups(input);
            expect(actual).toEqual({1: 1, 2: 4, 3: 2, 4: 1});
        });
    });

    describe("calculateTotalSimilarityScore", () => {
        test("should calculate the total similarity score", () => {
            let input = "3   4\n" + "4   3\n" + "2   5\n" + "1   3\n" + "3   9\n" + "3   3";
            let actual = calculateTotalSimilarityScore(input);
            expect(actual).toEqual(31);
        });
    });
});