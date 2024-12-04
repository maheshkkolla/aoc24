import {getCombinations, getWordFrom, toMatrix, countWord, getCombinationsForX, countWordPart2} from "./index.js";

describe("Day 4", () => {
    describe("getCombinations", () => {
        test("should get the right combination", () => {
            let actual = getCombinations(5, 5);
            expect(actual[0]).toEqual([[5, 5], [5, 6], [5, 7], [5, 8]]);
        });

        test("should get the left combination", () => {
            let actual = getCombinations(5, 5);
            expect(actual[1]).toEqual([[5, 5], [5, 4], [5, 3], [5, 2]]);
        });

        test("should get the bottom combination", () => {
            let actual = getCombinations(5, 5);
            expect(actual[2]).toEqual([[5, 5], [6, 5], [7, 5], [8, 5]]);
        });

        test("should get the top combination", () => {
            let actual = getCombinations(5, 5);
            expect(actual[3]).toEqual([[5, 5], [4, 5], [3, 5], [2, 5]]);
        });

        test("should get the diagonal combination - top right", () => {
            let actual = getCombinations(5, 5);
            expect(actual[4]).toEqual([[5, 5], [6, 6], [7, 7], [8, 8]]);
        });

        test("should get the diagonal combination - top left", () => {
            let actual = getCombinations(5, 5);
            expect(actual[5]).toEqual([[5, 5], [4, 4], [3, 3], [2, 2]]);
        });

        test("should get the diagonal combination - bottom left", () => {
            let actual = getCombinations(5, 5);
            expect(actual[6]).toEqual([[5, 5], [6, 4], [7, 3], [8, 2]]);
        });

        test("should get the diagonal combination - bottom right", () => {
            let actual = getCombinations(5, 5);
            expect(actual[7]).toEqual([[5, 5], [4, 6], [3, 7], [2, 8]]);
        });
    });

    describe("getCombinationsForX", () => {
        test("should get the diagonal combination - top right", () => {
            let actual = getCombinationsForX(5, 5);
            expect(actual[0]).toEqual([[4, 4], [5, 5], [6, 6]]);
        });

        test("should get the diagonal combination - top left", () => {
            let actual = getCombinationsForX(5, 5);
            expect(actual[1]).toEqual([[4, 6], [5, 5], [6, 4]]);
        });

        test("should get the diagonal combination - bottom left", () => {
            let actual = getCombinationsForX(5, 5);
            expect(actual[2]).toEqual([[6, 4], [5, 5], [4, 6]]);
        });

        test("should get the diagonal combination - bottom right", () => {
            let actual = getCombinationsForX(5, 5);
            expect(actual[3]).toEqual([[6, 6], [5, 5], [4, 4]]);
        });
    });

    describe("getWordFrom", () => {
        test("should return the word from the locations - horizontal", () => {
            let input = [[1, 2], [1, 3], [1, 4], [1, 5]];
            let fullArray = [["r", "a", "n", "d", "o", "m"], ["a", "b", "x", "m", "a", "s"]]
            let actual = getWordFrom(input, fullArray);
            expect(actual).toEqual("xmas");
        });

        test("should return the word from the locations - vertical", () => {
            let input = [[0, 3], [1, 3], [2, 3]];
            let fullArray = [["r", "a", "n", "d", "o", "m"], ["a", "b", "x", "m", "a", "s"], ["a", "b", "c", "d", "e", "f"]]
            let actual = getWordFrom(input, fullArray);
            expect(actual).toEqual("dmd");
        });

        test("should return the word from the locations - invalid vertical input", () => {
            let input = [[0, 3], [-1, 3], [-2, 3]];
            let fullArray = [["r", "a", "n", "d", "o", "m"], ["a", "b", "x", "m", "a", "s"], ["a", "b", "c", "d", "e", "f"]]
            let actual = getWordFrom(input, fullArray);
            expect(actual).toEqual("d");
        });

        test("should return the word from the locations - invalid horizontal input", () => {
            let input = [[0, -1], [0, -2], [0, -3]];
            let fullArray = [["r", "a", "n", "d", "o", "m"], ["a", "b", "x", "m", "a", "s"], ["a", "b", "c", "d", "e", "f"]]
            let actual = getWordFrom(input, fullArray);
            expect(actual).toEqual("");
        });
    });

    describe("toMatrix", () => {
        let input = "MMMSXXMASM\n" + "MSAMXMSMSA\n" + "AMXSXMAAMM";
        let actual = toMatrix(input);
        expect(actual).toEqual([
            ['M', 'M', 'M', 'S', 'X', 'X', 'M', 'A', 'S', 'M'],
            ['M', 'S', 'A', 'M', 'X', 'M', 'S', 'M', 'S', 'A'],
            ['A', 'M', 'X', 'S', 'X', 'M', 'A', 'A', 'M', 'M']
        ]);
    });

    describe("countWord", () => {
        test("should count the word in all directions", () => {
            var input = "MMMSXXMASM\n" + "MSAMXMSMSA\n" + "AMXSXMAAMM\n" + "MSAMASMSMX\n" + "XMASAMXAMM\n" + "XXAMMXXAMA\n" + "SMSMSASXSS\n" + "SAXAMASAAA\n" + "MAMMMXMMMM\n" + "MXMXAXMASX";
            expect(countWord(input)).toEqual(18);
        });
    });

    describe("countWordPart2", () => {
        test("should count the word in all directions", () => {
            var input = "MMMSXXMASM\n" + "MSAMXMSMSA\n" + "AMXSXMAAMM\n" + "MSAMASMSMX\n" + "XMASAMXAMM\n" + "XXAMMXXAMA\n" + "SMSMSASXSS\n" + "SAXAMASAAA\n" + "MAMMMXMMMM\n" + "MXMXAXMASX";
            expect(countWordPart2(input)).toEqual(9);
        });
    });
});