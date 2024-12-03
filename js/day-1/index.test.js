import {toArray, makeColumns, sortAll, calculateDifferences, calculateTotalDistance, calculateTotalSimilarityScore, countByGroups} from "./index";

describe("Day 1", () => {
    describe("toArray should convert the input to array ", () => {
        test("splitting by space", () => {
            expect(toArray("1 4")).toEqual([1, 4]);
            expect(toArray("5 9")).toEqual([5, 9]);
        });

        test("could be any number of spaces in between", () => {
            expect(toArray("1239    1239")).toEqual([1239, 1239]);
            expect(toArray("132     4")).toEqual([132, 4]);
            expect(toArray("1       4")).toEqual([1, 4]);
        });
    });

    describe("makeColumns", () => {
        test("should make the column arrays from the array of rows", () => {
            let input = [[1, 3], [2, 5], [3, 8]];
            let actual = makeColumns(input);

            expect(actual).toEqual([[1, 2, 3], [3, 5, 8]]);
        });
    });

    describe("sortAll", () => {
        test("should sort the arrays inside the array", () => {
            let input = [[2, 1, 7], [5, 2, 0]];
            let actual = sortAll(input);
            expect(actual).toEqual([[1, 2, 7], [0, 2, 5]]);
        });
    });

    describe("calculateDifferences", () => {
        test("should calculate the difference of each row", () => {
            let input = [[1, 2, 7], [0, 2, 5]];
            let actual = calculateDifferences(input);
            expect(actual).toEqual([1, 0, 2]);
        });

        test("should consider the greater number either side", () => {
            let input = [[0, 3, 5], [1, 2, 7]];
            let actual = calculateDifferences(input);
            expect(actual).toEqual([1, 1, 2]);
        });
    });

    describe("calculateTotalDistance", () => {
       test("should get the total of the differences", () => {
          let input = "3   4\n" + "4   3\n" + "2   5\n" + "1   3\n" + "3   9\n" + "3   3";
          let actual = calculateTotalDistance(input);
          expect(actual).toEqual(11);
       });
    });

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
